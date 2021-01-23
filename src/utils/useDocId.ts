import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import useItem from "./useItem";
export default function useDocId(collection: string, id: string) {
  const [doc] = useDocumentDataOnce<any>(
    firestore.collection(collection).doc(id.toLowerCase()),
    { idField: "id" }
  );
  const item = useItem(doc);
  return item;
}
