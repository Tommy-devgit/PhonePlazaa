// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvrJyFnGl5B7vkbWivq_AsHy-HIgOaEMo",
  authDomain: "phone-plaza-f8fe1.firebaseapp.com",
  projectId: "phone-plaza-f8fe1",
  storageBucket: "phone-plaza-f8fe1.firebasestorage.app",
  messagingSenderId: "404607110843",
  appId: "1:404607110843:web:62f3bae231b9c9ba74639e",
  measurementId: "G-CV72TCP1EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);