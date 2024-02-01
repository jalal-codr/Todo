// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Kz4Wyi8IVrkboytNiajQMH63XJjEMhE",
  authDomain: "streem-af2af.firebaseapp.com",
  projectId: "streem-af2af",
  storageBucket: "streem-af2af.appspot.com",
  messagingSenderId: "288240244468",
  appId: "1:288240244468:web:77fa503325c4b357a5f0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const provider = new GoogleAuthProvider();