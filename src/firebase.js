// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOYHw72TP9o7k2EbblcIs2Y9Zp-gueMRQ",
  authDomain: "to-do-list-f4de7.firebaseapp.com",
  projectId: "to-do-list-f4de7",
  storageBucket: "to-do-list-f4de7.appspot.com",
  messagingSenderId: "769915728482",
  appId: "1:769915728482:web:5781560ced84a7b6ab173b",
  measurementId: "G-D2E66KYRZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app)