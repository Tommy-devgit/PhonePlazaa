import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvrJyFnGl5B7vkbWivq_AsHy-HIgOaEMo",
  authDomain: "phone-plaza-f8fe1.firebaseapp.com",
  projectId: "phone-plaza-f8fe1",
  storageBucket: "phone-plaza-f8fe1.firebasestorage.app",
  messagingSenderId: "404607110843",
  appId: "1:404607110843:web:62f3bae231b9c9ba74639e",
  measurementId: "G-CV72TCP1EC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);