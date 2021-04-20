import { ADD_TO_ORDER } from '../actions/addToOrder';

const initialState = {
    order: [],
};

export function orderReducer(state = initialState, action) {
    switch (action.type) {
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
                };
            }
        }
        default:
            return state;
    }
}