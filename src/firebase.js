import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMcZ-TFEx3BP4M5_dy47iYxfkyiYcF9HE",
  authDomain: "bochedemo.firebaseapp.com",
  projectId: "bochedemo",
  storageBucket: "bochedemo.appspot.com",
  messagingSenderId: "372204770631",
  appId: "1:372204770631:web:c7f0760d9c10563ca0e862",
  measurementId: "G-4QFFHGN1L0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
