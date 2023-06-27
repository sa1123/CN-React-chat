import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAULGR3mb7QkMoou-uS54hZ4Le5d2h1ucU",
  authDomain: "chat-b2472.firebaseapp.com",
  projectId: "chat-b2472",
  storageBucket: "chat-b2472.appspot.com",
  messagingSenderId: "475686749988",
  appId: "1:475686749988:web:41bbb18328ef3bc141d5b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()