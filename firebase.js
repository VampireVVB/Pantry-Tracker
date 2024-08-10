// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEcoIbg9LolfrdrYbr8PH4RvIlAhEqlDI",
  authDomain: "pantry-tracker-b00fa.firebaseapp.com",
  projectId: "pantry-tracker-b00fa",
  storageBucket: "pantry-tracker-b00fa.appspot.com",
  messagingSenderId: "133239538635",
  appId: "1:133239538635:web:89e05870db6ca668572c4e",
  measurementId: "G-GRXMHJ4XJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)


export{firestore}