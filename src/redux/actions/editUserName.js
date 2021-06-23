export const EDIT_USER_NAME = '@@customer/EDIT_USER_NAME';

export const editUserName = (name) => ({
    type: EDIT_USER_NAME,
    payload: {name},
})