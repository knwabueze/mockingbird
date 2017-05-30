import { observable, action, computed } from 'mobx'
import remotedev from 'mobx-remotedev'
import validateLogin from '../helpers/login-validation'

@remotedev
export class AuthStore {
    @observable user = null;
    @observable validationErrors = null;
    @observable serverErrors = null;

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
        this.clearErrors();
        return new Promise((resolve, reject) => this.auth.signOut()
            .catch(err => {
                this.serverErrors = err;
                reject();
            }).then(() => resolve()))
    }

    @action signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            this.validateLoginForm(email, password)
                .then(() => {
                    this.auth.signInWithEmailAndPassword(email, password)
                        .then(() => resolve())
                        .catch(err => {
                            this.serverErrors = err;
                            reject()
                        });
                })
                .catch(() => reject())
        });
    }

    @action validateLoginForm(email, password) {
        this.clearErrors();
        return new Promise((resolve, reject) => {
            validateLogin({ email, password })
                .then(() => resolve())
                .catch(err => {
                    this.validationErrors = err;
                    reject();
                })
        });
    }

    @action createUserWithEmailAndPassword(email, password) {
        this.validationErrors = null;
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.error("Error creating email with username and password", err.stack)
            })
    }

    @action clearErrors() {
        this.validationErrors = null;
        this.serverErrors = null;
    }

    @computed get isAuthenticated() {
        return !!this.user;
    }

    @computed get hasErrors() {
        return !!this.validationErrors || !!this.serverErrors;
    }
}