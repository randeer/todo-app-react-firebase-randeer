// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKugmHhWVA3I19dFiYHzqKvMSW9C6QbgA",
  authDomain: "to-do-5ab58.firebaseapp.com",
  projectId: "to-do-5ab58",
  storageBucket: "to-do-5ab58.appspot.com",
  messagingSenderId: "406144454121",
  appId: "1:406144454121:web:65c9f9b00f24bba9894f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)