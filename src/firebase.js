import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBleIrmArl7kdToX01tGmdUTaf8FuLy1Jo",
  authDomain: "collage-project-e3867.firebaseapp.com",
  projectId: "collage-project-e3867",
  storageBucket: "collage-project-e3867.appspot.com",
  messagingSenderId: "230533434555",
  appId: "1:230533434555:web:e48c506401ac189bf5ad9e",
  measurementId: "G-5JPB9D9KSD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)
export const storage= getStorage(app)
 export const auth = getAuth(app);
