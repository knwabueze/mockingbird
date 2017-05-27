import { observable, action } from 'mobx'

export class AuthUser {
    @observable uid;
    @observable username;
    @observable email;
}

export class UIStore {
    @observable users = null;
    @observable currentUser = null;
    ref = null;
    auth = null;

    constructor(auth, database) {
        this.ref = database.ref('users');
        this.auth = auth;
        this.users = this.ref.on('value', snap => this.users = snap.val());
    }

    @action listenUserState() {
        this.auth.onAuthStateChanged(user => {
            if (user) {
                this.currentUser = new AuthUser();
                this.currentUser.username = user.displayName;
                this.currentUser.uid = user.uid;
                this.currentUser.email = user.email;
            } else {    
                this.currentUser = null;
            }
        })
    }

    @action createUser(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
        while (this.currentUser.uid == null) {}
        this.ref.child(`${this.currentUser.uid}`).set({
            username: this.currentUser.username,
            email: this.currentUser.email
        })
    }

    @action signOut() {
        this.auth.signOut().catch(err => console.log(err));
    }

    @action signIn(email, password) {
        this.auth.signInUserWithEmailAndPassword(email, password).catch(err => console.log(err));
    }
}