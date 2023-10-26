// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { getMessaging, getToken, onMessage  } from "firebase/messaging";


import React, { useEffect } from 'react';

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
export const auth = getAuth();
export const db = getDatabase(app);
const messaging = getMessaging(app);
 getToken(messaging, {vapid: "BAVIg8Am4rMjrr7VIFsYQ5lxygAcTi20hGwkn-XMnoTt6bpVXzn-FQbsnEYFjXUk-XhAuaISqUF__T_FILeQtK0"});
 onMessage(messaging, (payload) => {
})

 //sign with google popup
