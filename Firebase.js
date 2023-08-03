// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KSyxSIzlostkeb7F7X6BrohRdVNr0VM",
  authDomain: "fir-auth-3d05b.firebaseapp.com",
  projectId: "fir-auth-3d05b",
  storageBucket: "fir-auth-3d05b.appspot.com",
  messagingSenderId: "65897586617",
  appId: "1:65897586617:web:0803689ae065ce37ba2068"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};