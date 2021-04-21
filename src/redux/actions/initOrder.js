export const INIT_ORDER = '@@order/INIT_ORDER';

export const initOrder = (order) => ({
    type: INIT_ORDER,
    payload: order,
});
