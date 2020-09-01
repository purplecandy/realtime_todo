import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAXoPpnqpUoTv-AeK1QytffTassgoryyy4",
    authDomain: "pigeon-17448.firebaseapp.com",
    databaseURL: "https://pigeon-17448.firebaseio.com",
    projectId: "pigeon-17448",
    storageBucket: "pigeon-17448.appspot.com",
    messagingSenderId: "731285816559",
    appId: "1:731285816559:web:c27feba13dbd02fe97c71a",
    measurementId: "G-H21KF0NW9N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();