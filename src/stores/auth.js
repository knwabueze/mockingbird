import { observable, action, computed } from 'mobx'
import remotedev from 'mobx-remotedev'  

@remotedev
export class AuthStore {
    @observable user = null;

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

    @computed get isAuthenticated() {
        return !!this.user;
    }

    @action signOut() {
        this.auth.signOut();
    }
}