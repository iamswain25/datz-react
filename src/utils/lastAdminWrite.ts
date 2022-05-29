import firebase from "firebase/app";
import { auth, firestore } from "../config/firebase";

export default async function lastAdminWrite() {
  return firestore
    .collection("system")
    .doc("timestamp")
    .set(
      {
        updated_at: new Date(),
        updated_by: auth.currentUser?.uid || "no auth but admin?",
        count: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
}

export const timestampRef = firestore.collection("system").doc("timestamp");
