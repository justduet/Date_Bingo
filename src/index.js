import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6GnAW8wz1EJMgVZGidCMq09Q5KkscObo",
  authDomain: "date-bingo.firebaseapp.com",
  projectId: "date-bingo",
  storageBucket: "date-bingo.appspot.com",
  messagingSenderId: "878607407146",
  appId: "1:878607407146:web:c6c2da38aa289937b84b53",
  measurementId: "G-4LT3GTW9D1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {firestore, storage, timestamp, db};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);



