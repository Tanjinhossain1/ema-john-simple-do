// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0jjUqKcQ39C67x1d0jFKscA3DKYFdntM",
  authDomain: "ema-john-simple-do.firebaseapp.com",
  projectId: "ema-john-simple-do",
  storageBucket: "ema-john-simple-do.appspot.com",
  messagingSenderId: "29651074564",
  appId: "1:29651074564:web:7c9b0292020d3f78823f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;