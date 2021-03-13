import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBIUtHFeYLtjsNIy28DgHxck_cBKqZ6fPs",
    authDomain: "clone-e0a20.firebaseapp.com",
    projectId: "clone-e0a20",
    storageBucket: "clone-e0a20.appspot.com",
    messagingSenderId: "653373881149",
    appId: "1:653373881149:web:79cf35287d6631ef646354",
    measurementId: "G-YBEYS2BE30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};