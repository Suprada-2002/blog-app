
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "blog-app-da2ee.firebaseapp.com",
  projectId: "blog-app-da2ee",
  storageBucket: "blog-app-da2ee.appspot.com",
  messagingSenderId: "617719508863",
  appId: "1:617719508863:web:e652a4c426547b34f6b44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);