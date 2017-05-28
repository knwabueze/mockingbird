import { BIND_USER_CHANGED } from '../actions/types'

export default function auth(state = { currentUser: null }, action) {
    switch (action.type) {
        case BIND_USER_CHANGED:
            return Object.assign({}, state, { currentUser: action.payload })
        default:
            return state;
    }
}