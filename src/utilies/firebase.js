// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcn9njoMNzXHaioSjVgVCv3obRiwH2xfU",
  authDomain: "netflix-gpt3-8164d.firebaseapp.com",
  projectId: "netflix-gpt3-8164d",
  storageBucket: "netflix-gpt3-8164d.firebasestorage.app",
  messagingSenderId: "28985606335",
  appId: "1:28985606335:web:8f0aef05d3cf372b49c60a",
  measurementId: "G-M2H59VV2KE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);