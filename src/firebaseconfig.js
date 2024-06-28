// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPbVAXFN4SJGX9Wa4BfhXfY1bbBkYgxig",
  authDomain: "shivamshahportfolio-7ceae.firebaseapp.com",
  projectId: "shivamshahportfolio-7ceae",
  storageBucket: "shivamshahportfolio-7ceae.appspot.com",
  messagingSenderId: "691432813494",
  appId: "1:691432813494:web:3fbd782b4703be2a6c4717",
  measurementId: "G-Y84LB8MFYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
