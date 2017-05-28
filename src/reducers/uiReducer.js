import { BIND_USER_CHANGED } from '../actions/types'

export default function ui(previousState = {}, action) {
    switch (action.type) {
        case BIND_USER_CHANGED:
            return { ...previousState, currentUser: action.payload }
        default:
            return previousState;
    }
}