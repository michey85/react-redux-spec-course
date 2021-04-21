import { ADD_TO_ORDER } from '../actions/addToOrder';
import { REMOVE_FROM_ORDER } from '../actions/removeFromOrder';

export const orderMiddleware = (store) => (next) => (action) => {
    next(action);

    if ([ADD_TO_ORDER, REMOVE_FROM_ORDER].includes(action.type)) {
        const { shop: { order = [] } = {} } = store.getState();

        localStorage.setItem('order', JSON.stringify(order));
    }
};
