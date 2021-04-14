import React from "react";
import { firestore } from "../config/firebase";
import firebase from "firebase";
import useItems from "./useItems";
export default function useCollection(collection: string, order = false) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    let fire: firebase.firestore.Query<firebase.firestore.DocumentData> = firestore.collection(
      collection
    );
    if (order) {
      fire = fire.where("public", "==", true);
      fire = fire.orderBy("order", "asc");
    }

    fire
      .get()
      .then((snap) => snap.docs)
      .then((docs) =>
        docs.map((d) => ({ collection, id: d.id, ...d.data() } as any))
      )
      .then(setItems);
  }, [collection, order]);
  return convertedItems;
}
