// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSajUoP3nEhgmRztSiCLglVKNsQ3Wj9io",
  authDomain: "w9w10-74650.firebaseapp.com",
  projectId: "w9w10-74650",
  storageBucket: "w9w10-74650.appspot.com",
  messagingSenderId: "461618268928",
  appId: "1:461618268928:web:4bf868eeddc6732792c1e5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db