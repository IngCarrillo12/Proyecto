// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClw98Knx1ocHvFWsTj_hJ5qtQT0XSB5AU",
  authDomain: "pokedexmon-464c6.firebaseapp.com",
  projectId: "pokedexmon-464c6",
  storageBucket: "pokedexmon-464c6.appspot.com",
  messagingSenderId: "736331360700",
  appId: "1:736331360700:web:d84ec574a647b38df1a3b9",
  measurementId: "G-7F8HEYW8YP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)