// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNUKLmfPOPARbtsmVG5meNTYVeC3x8T2E",
  authDomain: "laigualitaria-8d394.firebaseapp.com",
  databaseURL:
    "https://laigualitaria-8d394-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "laigualitaria-8d394",
  storageBucket: "laigualitaria-8d394.appspot.com",
  messagingSenderId: "391469348971",
  appId: "1:391469348971:web:347f9b2db6483cb277192e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
