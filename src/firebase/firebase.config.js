// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAqnT9_o9hkDzDw-xV0H6m_DTepCCwfU",
  authDomain: "marathon-system.firebaseapp.com",
  projectId: "marathon-system",
  storageBucket: "marathon-system.firebasestorage.app",
  messagingSenderId: "631395359733",
  appId: "1:631395359733:web:2f0a12cf3de0111b049ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);