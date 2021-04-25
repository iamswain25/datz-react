import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
async function trash(item: any) {
  const { id, ...rest } = item;
  return firestore.collection("trash").doc(id).set(rest);
}
async function remove(collection: string, docId: string) {
  return firestore.collection(collection).doc(docId).delete();
}
export default function useTrashItem(item: any) {
  const { type, collection } = useParams<Param>();
  const [, setItem] = useAdminItem();
  switch (type) {
    case "banner":
    case "publication_category":
      return function trash_remove() {
        if (!window.confirm("삭제하겠습니까?")) return;
        trash(item);
        remove(type, item.id);
        setItem(undefined);
      };
    default:
      return function trash_remove() {
        if (!window.confirm("삭제하겠습니까?")) return;
        trash(item);
        remove(collection, item.id);
        setItem(undefined);
      };
  }
}
