// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNaj-I-cirrbmPEsJc8o_DoqBp1zvsMc",
  authDomain: "burger-queen-1bdb3.firebaseapp.com",
  projectId: "burger-queen-1bdb3",
  storageBucket: "burger-queen-1bdb3.appspot.com",
  messagingSenderId: "594352483271",
  appId: "1:594352483271:web:7c4187f6f3bc800543c7e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
