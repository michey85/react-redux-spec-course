import { ADD_TO_ORDER } from '../actions/addToOrder';
import { REMOVE_FROM_ORDER } from '../actions/removeFromOrder';
import { CLOSE_SNACK } from '../actions/closeSnack';
import { OPEN_SNACKBAR } from '../actions/openSnack';
import { INIT_ORDER } from '../actions/initOrder';

const initialState = {
    order: [],
    snackOpen: false,
};

export function orderReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_ORDER:
            return {
                ...state,
                order: action.payload,
            };
        case ADD_TO_ORDER: {
            const { order } = state;

            const indexInOrder = order.findIndex(
                (item) => item.id === action.payload.id
            );

            if (indexInOrder > -1) {
                return {
                    ...state,
                    order: order.map((item) => {
                        if (item.id !== action.payload.id) return item;

                        return {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity + 1,
                        };
                    }),
                    snackOpen: true,
                };
            } else {
                return {
                    ...state,
                    order: [
                        ...order,
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            price: action.payload.price,
                            quantity: 1,
                        },
                    ],
                    snackOpen: true,
                };
            }
        }
        case REMOVE_FROM_ORDER: {
            const { order } = state;

            return {
                ...state,
                order: order.filter((item) => item.id !== action.payload.id),
            };
        }
        case OPEN_SNACKBAR:
            return {
                ...state,
                snackOpen: true,
            };
        case CLOSE_SNACK:
            return {
                ...state,
                snackOpen: false,
            };
        default:
            return state;
    }
}
