import { BIND_USER_CHANGED  } from './types'
import { auth } from './firebase'

export const bindUserChanged = () => dispatch => {
    auth().onAuthStateChanged(user => {
        dispatch({
            type: BIND_USER_CHANGED,
            payload: user
        })
    });
}

export const logInWithEmailAndPassword = (email, password) => dispatch => {
    auth().signInWithEmailAndPassword(email, password);
}

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
    auth().createUserWithEmailAndPassword(email, password);
}

export const signOut = () => dispatch => {
    auth().signOut();
}