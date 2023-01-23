import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHGhGeADc19E91mu5gI6gw3-EBYVUO2JY",
  authDomain: "fir-fbd57.firebaseapp.com",
  projectId: "fir-fbd57",
  storageBucket: "fir-fbd57.appspot.com",
  messagingSenderId: "428783112650",
  appId: "1:428783112650:web:6d6ceb5536703bb564ff33",
  measurementId: "G-SHKVHDH6D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;