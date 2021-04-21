import { ADD_TO_ORDER } from '../actions/addToOrder';

export const orderMiddleware = (store) => (next) => (action) => {
    next(action);

    if (action.type === ADD_TO_ORDER) {
        const { shop: { order = [] } = {} } = store.getState();

        localStorage.setItem('order', JSON.stringify(order));
    }
};
