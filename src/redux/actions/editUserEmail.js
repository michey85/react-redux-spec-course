export const EDIT_USER_EMAIL = '@@customer/EDIT_USER_EMAIL';

export const editUserEmail = (email) => ({
    type: EDIT_USER_EMAIL,
    payload: {email},
})