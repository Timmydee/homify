// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsj5DcMtTz312hzs5RggXMXDX6n1enHZM",
  authDomain: "homify-39b13.firebaseapp.com",
  projectId: "homify-39b13",
  storageBucket: "homify-39b13.appspot.com",
  messagingSenderId: "274875317178",
  appId: "1:274875317178:web:9f09c0dfcbbc6f6d86bb83",
  measurementId: "G-TDS0HK2HV3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBsj5DcMtTz312hzs5RggXMXDX6n1enHZM",
//   authDomain: "homify-39b13.firebaseapp.com",
//   projectId: "homify-39b13",
//   storageBucket: "homify-39b13.appspot.com",
//   messagingSenderId: "274875317178",
//   appId: "1:274875317178:web:9f09c0dfcbbc6f6d86bb83",
//   measurementId: "G-TDS0HK2HV3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBfxnxpH8sO6BtAdx5PGTy1lxeigvm7g7g",
//   authDomain: "homify-b12f8.firebaseapp.com",
//   projectId: "homify-b12f8",
//   storageBucket: "homify-b12f8.appspot.com",
//   messagingSenderId: "431656505079",
//   appId: "1:431656505079:web:8e098a6d78574769f28df2"
// };