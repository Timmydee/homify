// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfxnxpH8sO6BtAdx5PGTy1lxeigvm7g7g",
  authDomain: "homify-b12f8.firebaseapp.com",
  projectId: "homify-b12f8",
  storageBucket: "homify-b12f8.appspot.com",
  messagingSenderId: "431656505079",
  appId: "1:431656505079:web:8e098a6d78574769f28df2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();