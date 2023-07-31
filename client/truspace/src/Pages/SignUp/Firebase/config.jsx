// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,RecaptchaVerifier} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCKpqhKaVpCSHO4MkpODbgnkmDkTFjBgKg",
  authDomain: "theurbanlane-f9ed8.firebaseapp.com",
  projectId: "theurbanlane-f9ed8",
  storageBucket: "theurbanlane-f9ed8.appspot.com",
  messagingSenderId: "404488282481",
  appId: "1:404488282481:web:3c3920b9a7f0b9601556d0",
  measurementId: "G-204GRMSKG9"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);