// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "netflixgpt-9a43b.firebaseapp.com",
  projectId: "netflixgpt-9a43b",
  storageBucket: "netflixgpt-9a43b.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_APPID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
