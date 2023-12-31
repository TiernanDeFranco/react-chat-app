// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUYCZGZQNM4YTvvSPzrsFFwgwrT_LmS8",
  authDomain: "react-chat-backened.firebaseapp.com",
  projectId: "react-chat-backened",
  storageBucket: "react-chat-backened.appspot.com",
  messagingSenderId: "98701801017",
  appId: "1:98701801017:web:f8dab7c4f867f6b80f7fe8",
  measurementId: "G-E0FQMDHFLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);