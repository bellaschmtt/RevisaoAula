// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr1kvtNpRLyxLABdMp9v1epsW6ldZSfbM",
  authDomain: "revisaoprova-77f49.firebaseapp.com",
  projectId: "revisaoprova-77f49",
  storageBucket: "revisaoprova-77f49.appspot.com",
  messagingSenderId: "617712603851",
  appId: "1:617712603851:web:2ec721927b43d101b0814e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);