// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2nkTWzcpuhFzFk2EVQGyN6hkoBDUBES0",
  authDomain: "e-commerce-e77bf.firebaseapp.com",
  databaseURL: "https://e-commerce-e77bf-default-rtdb.firebaseio.com",
  projectId: "e-commerce-e77bf",
  storageBucket: "e-commerce-e77bf.firebasestorage.app",
  messagingSenderId: "459022423556",
  appId: "1:459022423556:web:560f871baa2e28ad230751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}