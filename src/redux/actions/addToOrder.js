const ADD_TO_ORDER = '@@order/ADD_TO_ORDER';

// item === {id, name, price}
const addToOrder = (item) => ({
    type: ADD_TO_ORDER,
    payload: item,
});

export { ADD_TO_ORDER, addToOrder };
