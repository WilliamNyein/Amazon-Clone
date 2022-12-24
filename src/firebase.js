// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ4ZnfzdQH80jljELTnr8D2VHP_XjlqEI",
  authDomain: "clone-39f8e.firebaseapp.com",
  projectId: "clone-39f8e",
  storageBucket: "clone-39f8e.appspot.com",
  messagingSenderId: "136073576365",
  appId: "1:136073576365:web:ffde1e7c206355ebc32b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()

