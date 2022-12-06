// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4gACCfxi9kSHLYSk0aNMOehogTppHrHI",
  authDomain: "gold-ecom.firebaseapp.com",
  projectId: "gold-ecom",
  storageBucket: "gold-ecom.appspot.com",
  messagingSenderId: "59658319952",
  appId: "1:59658319952:web:e89ffed1d182f297c5f955",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
