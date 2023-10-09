// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3VKRzrhvjI3UNJJqlN_zXCpEXNNkQuD4",
  authDomain: "delivfast-78790.firebaseapp.com",
  projectId: "delivfast-78790",
  storageBucket: "delivfast-78790.appspot.com",
  messagingSenderId: "840374551208",
  appId: "1:840374551208:web:2a7485e9c05badabdd389d",
  measurementId: "G-99YY65N4KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getDatabase(app);

//sign with google popup
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
   .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
     console.log(result);
     localStorage.setItem('authenticated', true);
     localStorage.setItem('name', name);
     localStorage.setItem('email', email);
     localStorage.setItem('profilePic', profilePic);
     window.location.reload();
  })
  .catch((error) => {
   alert(error);
  })
 };
