import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKd2jEMRVeKBpTY2sdFhy48U3opUbFHRc",
    authDomain: "clone-78879.firebaseapp.com",
    projectId: "clone-78879",
    storageBucket: "clone-78879.appspot.com",
    messagingSenderId: "404871846519",
    appId: "1:404871846519:web:85ce570e4612f05437c472",
    measurementId: "G-C4BPWT1RGC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};