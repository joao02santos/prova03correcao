
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB3x1ZkK60bzShav7wWsRJxeyS1xVeGNs",
  authDomain: "teste-5d491.firebaseapp.com",
  projectId: "teste-5d491",
  storageBucket: "teste-5d491.firebasestorage.app",
  messagingSenderId: "391183461788",
  appId: "1:391183461788:web:0e5a89efc38d94be302c59",
  measurementId: "G-62XV5T5D0C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
