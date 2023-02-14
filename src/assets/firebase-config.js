import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmgjDw3Pu-QZ0GADU9L9K_okW0btOuQTQ",
  authDomain: "blog-app-da2ee.firebaseapp.com",
  projectId: "blog-app-da2ee",
  storageBucket: "blog-app-da2ee.appspot.com",
  messagingSenderId: "617719508863",
  appId: "1:617719508863:web:e652a4c426547b34f6b44a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

