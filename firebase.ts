// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-5h1XdBTDBBjRO08VV7kc0pfgcsYpogc",
  authDomain: "socialbase-9420a.firebaseapp.com",
  projectId: "socialbase-9420a",
  storageBucket: "socialbase-9420a.appspot.com",
  messagingSenderId: "757493887923",
  appId: "1:757493887923:web:cab95865df82942a9a51c6",
  measurementId: "G-V0MP6HJBDB",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
