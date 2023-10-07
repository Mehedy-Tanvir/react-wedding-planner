// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCDM3fTAZqpmUD75BrEEoHjOf8B3ZKuE",
  authDomain: "wedding-instaplanner.firebaseapp.com",
  projectId: "wedding-instaplanner",
  storageBucket: "wedding-instaplanner.appspot.com",
  messagingSenderId: "392122870147",
  appId: "1:392122870147:web:03b0f8d341112fc1182eb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
