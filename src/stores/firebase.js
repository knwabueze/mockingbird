import firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBz9hHVq0adFTYTJM91pcQQ8GiJi_mVKQM",
    authDomain: "mockingbird-46b90.firebaseapp.com",
    databaseURL: "https://mockingbird-46b90.firebaseio.com",
    projectId: "mockingbird-46b90",
    storageBucket: "mockingbird-46b90.appspot.com",
    messagingSenderId: "182991538098"
});

export const database = app.database();
export const auth = app.auth;
