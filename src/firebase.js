// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjVbxjZ_d8qs8U3_WkwZR9jGnBpJVlR3g",
  authDomain: "budget-tracker-97e0a.firebaseapp.com",
  projectId: "budget-tracker-97e0a",
  storageBucket: "budget-tracker-97e0a.appspot.com",
  messagingSenderId: "268273372096",
  appId: "1:268273372096:web:785568ee62951a5db51625",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
export const db = getFirestore(app);

export default app;
