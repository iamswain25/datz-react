import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgm25B93ZppPy7-K_mD3U8nj0KX_4m6cU",
  authDomain: "datzpress-0.firebaseapp.com",
  databaseURL: "https://datzpress-0.firebaseio.com",
  projectId: "datzpress-0",
  storageBucket: "datzpress-0.appspot.com",
  messagingSenderId: "674189588738",
  appId: "1:674189588738:web:474780f375fa3b46fb2a1b",
  measurementId: "G-9VZTMEZCPG"
};
Firebase.initializeApp(firebaseConfig);
const firestore = Firebase.firestore();
const auth = Firebase.auth();
export { firestore, Firebase, auth };
