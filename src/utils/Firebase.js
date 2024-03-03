// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-LPJFzJzw2FUZ4jL1drRcoTUGG8Zjwwo",
  authDomain: "netflixgpt-824c8.firebaseapp.com",
  projectId: "netflixgpt-824c8",
  storageBucket: "netflixgpt-824c8.appspot.com",
  messagingSenderId: "512994883040",
  appId: "1:512994883040:web:d562817242af3f79fba785",
  measurementId: "G-84V95H1B2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();