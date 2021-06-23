const INCREASE_QUANTITY = '@@order/INCREASE_QUANTITY';

const incQuantity = (id) => ({
    type: INCREASE_QUANTITY,
    payload: {id}
})

export {
    INCREASE_QUANTITY,
    incQuantity,
}