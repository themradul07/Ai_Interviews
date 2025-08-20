// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAr-u8pTGrCpFZhqbgC4BABOKgguzFsdk",
  authDomain: "prepwise-9860e.firebaseapp.com",
  projectId: "prepwise-9860e",
  storageBucket: "prepwise-9860e.firebasestorage.app",
  messagingSenderId: "925013300876",
  appId: "1:925013300876:web:14375c593cc249e3514da9",
  measurementId: "G-Q50YMQBNR2"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

::::::::::::::"""""":::::::""'''''::::::

export const auth = getAuth(app);
export const db = getFirestore(app);