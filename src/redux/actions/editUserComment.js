export const EDIT_USER_COMMENT = '@@customer/EDIT_USER_COMMENT';

export const editUserComment = (comment) => ({
    type: EDIT_USER_COMMENT,
    payload: {comment},
})