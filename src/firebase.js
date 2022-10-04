import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBPx5RnQatiEEej6GZDiTMSUx0_Wb1drQ0",
  authDomain: "fishbowl-e0feb.firebaseapp.com",
  projectId: "fishbowl-e0feb",
  storageBucket: "fishbowl-e0feb.appspot.com",
  messagingSenderId: "534973262054",
  appId: "1:534973262054:web:693d6cf530b8457889b327",
  measurementId: "G-3Y28N41YHH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage = getStorage(app)

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutAuth() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsubscribe;
  }, [])

  return currentUser;
}


export default app