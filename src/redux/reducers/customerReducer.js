import {EDIT_USER_NAME} from '../actions/editUserName'
import {EDIT_USER_EMAIL} from '../actions/editUserEmail'
import {EDIT_USER_COMMENT} from '../actions/editUserComment'

const initialState = {
    name: 'anonim',
    email: null,
    comment: null,
}

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_USER_NAME:
            return {
                ...state,
                name: action.payload.name,
            }
        case EDIT_USER_EMAIL:
            return {
                ...state,
                email: action.payload.email,
            }
        case EDIT_USER_COMMENT:
            return {
                ...state,
                comment: action.payload.comment,
            }
        default:
            return state;
    }
}