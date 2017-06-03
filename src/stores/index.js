import { UIStore } from './ui'
import { AuthStore } from './auth'
import { LoginStore } from './login'
import firebase from 'firebase'

try {
    firebase.initializeApp({
        apiKey: "AIzaSyBz9hHVq0adFTYTJM91pcQQ8GiJi_mVKQM",
        authDomain: "mockingbird-46b90.firebaseapp.com",
        databaseURL: "https://mockingbird-46b90.firebaseio.com",
        projectId: "mockingbird-46b90",
        storageBucket: "mockingbird-46b90.appspot.com",
        messagingSenderId: "182991538098"
    })
} catch (ex) {
    console.error('Firebase initialization error', ex.stack);
}

const auth = firebase.auth();

export default () => ({
    ui: new UIStore(),
    auth: new AuthStore(auth),
    login: new LoginStore(auth)
})