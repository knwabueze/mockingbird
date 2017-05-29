import { observable, action, computed } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
export class AuthStore {
    @observable user = null;
    @observable authPending = true;

    constructor(auth) {
        this.auth = auth;
        this.unbindAuth = auth.onAuthStateChanged(user => {
            this.user = user
            this.authPending = !this.user;
        })
    }

    dispose() {
        if (this.unbindAuth) {
            this.unbindAuth()
        }
    }

    @action signOut() {
        this.auth.signOut()
            .catch(err => console.error('Firebase error: Could not sign out user', err.stack));
    }

    @action signInWithEmailAndPassword(email, password) {
        this.auth.signInWithEmailAndPassword(email, password)
            .catch(err => console.error('Firebase error: Could not login with email and password', err.stack))
    }

    @action createUserWithEmailAndPassword(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch(err => console.error('Firebase error: Could not create new user', err.stack))
    }

    @computed get isAuthenticated() {
        return !!this.user;
    }
}