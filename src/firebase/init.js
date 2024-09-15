// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLiIMH2krrG9JmyNe3MZSZr-QM0K6bd54",
  authDomain: "week7-tianchen-zhang.firebaseapp.com",
  projectId: "week7-tianchen-zhang",
  storageBucket: "week7-tianchen-zhang.appspot.com",
  messagingSenderId: "54018109971",
  appId: "1:54018109971:web:254cb7d96d4fe0f89945e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db