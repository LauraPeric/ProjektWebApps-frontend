import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7EKKTb_RNzUdsTDCdirb-CQljiZpXS-c",
    authDomain: "chefonlinee.firebaseapp.com",
    projectId: "chefonlinee",
    storageBucket: "chefonlinee.appspot.com",
    messagingSenderId: "629495157410",
    appId: "1:629495157410:web:1697db6319ef9ebc503dfb"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {
    firebase,
    db,
};