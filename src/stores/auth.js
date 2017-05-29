import { observable, action, computed } from 'mobx'
import remotedev from 'mobx-remotedev'
import validateLogin from '../helpers/login-validation'

@remotedev
export class AuthStore {
    @observable user = null;
    @observable errors = null;

    constructor(auth) {
        this.auth = auth;
        this.unbindAuth = auth.onAuthStateChanged(action(user => {
            this.user = user
        }))
    }

    dispose() {
        if (this.unbindAuth) {
            this.unbindAuth()
        }
    }

    @action signOut() {
        this.errors = null;
        this.auth.signOut()
            .catch(err => {
                console.error("Error signing out.", err.stack);
            })
    }

    @action signInWithEmailAndPassword(email, password) {
        this.errors = null;
        validateLogin({ email, password })
            .then(action(() => {
                this.auth.signInWithEmailAndPassword(email, password)
                    .catch(err => {
                        console.error("Account with these credentials don't exist.", err.stack)
                    }).then()
            }))
            .catch(action(err => {
                this.errors = err;
            }));
    }

    @action createUserWithEmailAndPassword(email, password) {
        this.errors = null;
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.error("Error creating email with username and password", err.stack)
            })
    }

    @computed get isAuthenticated() {
        return !!this.user;
    }

    @computed get hasErrors() {
        return !!this.errors;
    }
}