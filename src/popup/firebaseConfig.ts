// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPtsDKgrcrGMRTr6YRgXBqV2pG4_ysVXI",
  authDomain: "focusx-baby.firebaseapp.com",
  projectId: "focusx-baby",
  storageBucket: "focusx-baby.appspot.com",
  messagingSenderId: "131987540154",
  appId: "1:131987540154:web:9d73cca647d3c8af139a83",
  measurementId: "G-YB4S40YL8S"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export {
  firebaseApp
}

