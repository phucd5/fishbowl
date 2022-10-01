import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPx5RnQatiEEej6GZDiTMSUx0_Wb1drQ0",
  authDomain: "fishbowl-e0feb.firebaseapp.com",
  projectId: "fishbowl-e0feb",
  storageBucket: "fishbowl-e0feb.appspot.com",
  messagingSenderId: "534973262054",
  appId: "1:534973262054:web:693d6cf530b8457889b327",
  measurementId: "G-3Y28N41YHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}