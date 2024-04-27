// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIBKxKK6d3GGNQiQr4DipmkEN9JOzF2Q4",
  authDomain: "tourism-management-54a7c.firebaseapp.com",
  projectId: "tourism-management-54a7c",
  storageBucket: "tourism-management-54a7c.appspot.com",
  messagingSenderId: "761778849929",
  appId: "1:761778849929:web:7f77008a0df7f6c93fde58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;