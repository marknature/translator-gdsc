// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd3kGdJzkbgd2893i5v7og9aCloYMUwEo",
  authDomain: "kurundi-translator.firebaseapp.com",
  projectId: "kurundi-translator",
  storageBucket: "kurundi-translator.appspot.com",
  messagingSenderId: "582799908340",
  appId: "1:582799908340:web:923d13249969f49e50eda1",
  measurementId: "G-5DFQW2KPJ2"
  
  // apiKey: process.env.FIREBASE_API,
  // authDomain: process.env.FIRBASE_AUTHDOMAIN,
  // projectId: process.env.FIREBASE_PROJECTID,
  // storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.FIREBASE_APPID,
  // measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: any;
// Initialize Analytics and get a reference to the service
if (typeof window !== 'undefined') {
	analytics = getAnalytics(app);
}

export {analytics}