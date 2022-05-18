// Import the functions you need from the SDKs you need
  
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
 


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCf-RRc7ZC9Pe6N4chJilu_L7-EUwt-Ul0",
    authDomain: "mmbn-9cd5c.firebaseapp.com",
    projectId: "mmbn-9cd5c",
    storageBucket: "mmbn-9cd5c.appspot.com",
    messagingSenderId: "175210428549",
    appId: "1:175210428549:web:66c6e3d45a55621d2651ec",
    measurementId: "G-CHE626GNY1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  


ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
});


var ui = new firebaseui.auth.AuthUI(firebase.auth());