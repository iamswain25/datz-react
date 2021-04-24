import React from "react";
import { firestore } from "../config/firebase";
import firebase from "firebase";
import useItems from "./useItems";
export default function useCollection(collection: string, isPublic = false) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    let fire: firebase.firestore.Query<firebase.firestore.DocumentData> = firestore.collection(
      collection
    );
    fire = fire.orderBy("order", "asc");
    if (isPublic) {
      fire = fire.where("public", "==", true);
    }

    fire
      .get()
      .then((snap) => snap.docs)
      .then((docs) =>
        docs.map((d) => ({ collection, id: d.id, ...d.data() } as any))
      )
      .then(setItems);
  }, [collection, isPublic]);
  return convertedItems;
}
