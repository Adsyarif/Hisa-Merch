import { initializeApp } from "firebase/app";

import {
  getAuth, // for get rules of auth
  signInWithRedirect, // sign in methode
  signInWithPopup, // sign in methode
  GoogleAuthProvider, // for select login provider like facebook, github, google, an so on. initialize provider get prompt select_account
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore, // for get rule of firestore
  doc, // for get document instance
  getDoc, // for get the document
  setDoc, // for do something with document
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByfHzP4j-uEk8MXD90pfFsF0y5WfJt4gQ",
  authDomain: "hisastore-db.firebaseapp.com",
  projectId: "hisastore-db",
  storageBucket: "hisastore-db.appspot.com",
  messagingSenderId: "399403721208",
  appId: "1:399403721208:web:3d7a0b44387d4d047ab60d",
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// FireStore
export const db = getFirestore(); //get data from firebase console
// Give colection to user when authification are vcrify
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  // take the colection of "users" from user by uid
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshoot = await getDoc(userDocRef);

  //   if user data does not exist
  if (!userSnapshoot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
  //   if user data exist
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
