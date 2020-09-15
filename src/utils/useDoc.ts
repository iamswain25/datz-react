import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import useParams from "../components/useParams";
import { firestore } from "../config/firebase";
import useItem from "./useItem";
export default function useDoc(collection: string) {
  const { id } = useParams();
  const [doc] = useDocumentDataOnce<any>(
    firestore.collection(collection).doc(id.toLowerCase()),
    { idField: "id" }
  );
  const item = useItem(doc);
  return item;
}
