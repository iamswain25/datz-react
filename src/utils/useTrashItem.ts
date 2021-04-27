import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
import lastAdminWrite from "./lastAdminWrite";
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
        Promise.all([trash(item), remove(type, item.id), lastAdminWrite()]);
        setItem(undefined);
      };
    default:
      return function trash_remove() {
        if (!window.confirm("삭제하겠습니까?")) return;
        Promise.all([
          trash(item),
          remove(collection, item.id),
          lastAdminWrite(),
        ]);
        setItem(undefined);
      };
  }
}
