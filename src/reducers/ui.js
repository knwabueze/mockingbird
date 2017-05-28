import { LOGIN_MODAL_TOGGLE } from '../actions/types'

const initialState = {
    LOGIN_MODAL_IS_VISIBLE: false
}

export default function ui(state = initialState, action) {
    switch (action.type) {
        case LOGIN_MODAL_TOGGLE:
            return Object.assign({}, state, {
                LOGIN_MODAL_IS_VISIBLE: !state.LOGIN_MODAL_IS_VISIBLE
            })
        default:
            return state;
    }
}