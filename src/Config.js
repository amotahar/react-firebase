// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGhGeADc19E91mu5gI6gw3-EBYVUO2JY",
  authDomain: "fir-fbd57.firebaseapp.com",
  projectId: "fir-fbd57",
  storageBucket: "fir-fbd57.appspot.com",
  messagingSenderId: "428783112650",
  appId: "1:428783112650:web:6d6ceb5536703bb564ff33",
  measurementId: "G-SHKVHDH6D4"
};


<h1>Thi is firebase </h1>
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);