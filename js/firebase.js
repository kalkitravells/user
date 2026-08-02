// ==========================================
// Firebase Configuration
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// Firebase Config

const firebaseConfig = {

  apiKey: "AIzaSyAMn_Bveu_YKqjzVB3psIRTE0fWUViqPuY",

  authDomain: "kalki-travels-c0fa9.firebaseapp.com",

  projectId: "kalki-travels-c0fa9",

  storageBucket: "kalki-travels-c0fa9.firebasestorage.app",

  messagingSenderId: "10052407758",

  appId: "1:10052407758:web:a4becb0cd3470876611b9f",

  measurementId: "G-Q8VJE68VRY"

};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// Export

export {

auth,

db,

provider,

signInWithPopup,

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signOut,

onAuthStateChanged

};
