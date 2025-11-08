// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0e6PLaOiM3m2VegYc3ZWa2EL27fG6RZ0",
  authDomain: "potluck-9f246.firebaseapp.com",
  projectId: "potluck-9f246",
  storageBucket: "potluck-9f246.firebasestorage.app",
  messagingSenderId: "580552292837",
  appId: "1:580552292837:web:13b85922ea335aab02170c",
  measurementId: "G-QSQSBMRQKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);