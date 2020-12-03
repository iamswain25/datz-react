import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";

Firebase.initializeApp(firebaseConfig);
const firestore = Firebase.firestore();
// firestore.enablePersistence();
const auth = Firebase.auth();
const storage = Firebase.storage();
Firebase.analytics();
export { firestore, Firebase, auth, storage };
