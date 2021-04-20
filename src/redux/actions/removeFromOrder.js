const REMOVE_FROM_ORDER = '@@order/REMOVE_FROM_ORDER';

const removeFromOrder = (id) => ({
    type: REMOVE_FROM_ORDER,
    payload: { id },
});

export { REMOVE_FROM_ORDER, removeFromOrder };
