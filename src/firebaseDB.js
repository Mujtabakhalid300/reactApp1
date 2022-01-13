// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDso0uwe5pONqbOIE5DGV5bhgyEHwEEmYk",
  authDomain: "firstreactapp-d768a.firebaseapp.com",
  projectId: "firstreactapp-d768a",
  storageBucket: "firstreactapp-d768a.appspot.com",
  messagingSenderId: "544994643055",
  appId: "1:544994643055:web:fcdac96b40131c3a1dd19a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
