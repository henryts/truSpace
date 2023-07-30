// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAAPm7q2ggMZwzEEo2Jy8GOjxFyBdHodsY",
  authDomain: "truspace-946b7.firebaseapp.com",
  projectId: "truspace-946b7",
  storageBucket: "truspace-946b7.appspot.com",
  messagingSenderId: "585559364788",
  appId: "1:585559364788:web:e46fdd6d2e6ccf00a533e1",
  measurementId: "G-R9M6QBQH45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);