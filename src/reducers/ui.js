import { LOGIN_MODAL_TOGGLE } from '../actions/types'

const initialState = {
    LOGIN_MODAL_IS_VISIBLE: false
}

export default function ui(previousState = initialState, action) {
    switch (action.type) {
        case LOGIN_MODAL_TOGGLE:
            return Object.assign({}, previousState, {
                LOGIN_MODAL_IS_VISIBLE: !previousState.LOGIN_MODAL_IS_VISIBLE
            })
        default:
            return previousState;
    }
}