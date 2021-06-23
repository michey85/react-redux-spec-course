const DECREASE_QUANTITY = '@@order/DECREASE_QUANTITY';

const decQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    payload: {id}
})

export {
    DECREASE_QUANTITY,
    decQuantity
}