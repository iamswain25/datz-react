import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { firebaseConfig } from "./firebaseConfig";

Firebase.initializeApp(firebaseConfig);
const firestore = Firebase.firestore();
const auth = Firebase.auth();
const storage = Firebase.storage();
export { firestore, Firebase, auth, storage };
