import { observable, action } from 'mobx'

export class AuthUser {
    @observable uid;
    @observable username;
    @observable email;
    @observable image;
}

export class UIStore {
    @observable users = null;
    @observable currentUser = null;
    ref = null;
    auth = null;

    constructor(auth, database) {
        this.ref = database.ref();
        this.auth = auth();
    }

    @action listenUserState() {
        this.auth.onAuthStateChanged(user => {
            if (user) {
                this.currentUser = new AuthUser();
                this.currentUser.username = user.displayName;
                this.currentUser.uid = user.uid;
                this.currentUser.email = user.email;
                this.currentUser.image = user.photoURL;
            } else {    
                this.currentUser = null;
            }
        })
    }

    @action createUser(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
    }

    @action signOut() {
        this.auth.signOut().catch(err => console.log(err));
    }

    @action signIn(email, password) {
        this.auth.signInUserWithEmailAndPassword(email, password).catch(err => console.log(err));
    }
}