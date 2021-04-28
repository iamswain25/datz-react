import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
import lastAdminWrite from "./lastAdminWrite";
async function trash(collection: string, item: any) {
  const { id, ...rest } = item;
  return firestore.collection("trash").doc(`${collection}-${id}`).set(rest);
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
        if (!window.confirm(`Delete Page "${item.id}"?`)) return;
        Promise.all([
          trash(collection, item),
          remove(type, item.id),
          lastAdminWrite(),
        ]);
        setItem(undefined);
      };
    default:
      return function trash_remove() {
        if (!window.confirm(`Delete Page "${item.id}"?`)) return;
        Promise.all([
          trash(collection, item),
          remove(collection, item.id),
          lastAdminWrite(),
        ]);
        setItem(undefined);
      };
  }
}
