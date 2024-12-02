// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcf2T-pNHg3up7th6L2Xg79tL2eE_55hA",
  authDomain: "alamin-note.firebaseapp.com",
  projectId: "alamin-note",
  storageBucket: "alamin-note.firebasestorage.app",
  messagingSenderId: "800324006233",
  appId: "1:800324006233:web:8e21c7cf497ecd7a929c48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app