import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqiT6Zm3juxoRY-WK5uAbvUo-SFWbYnfE",
  authDomain: "chat-35cb3.firebaseapp.com",
  projectId: "chat-35cb3",
  storageBucket: "chat-35cb3.appspot.com",
  messagingSenderId: "499857525605",
  appId: "1:499857525605:web:feda25dcf225a142c8ef8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
