import React from "react";
import { firestore } from "../config/firebase";
import useItems from "./useItems";
export default function useCollection(collection: string) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    firestore
      .collection(collection)
      .get()
      .then((snap) => snap.docs)
      .then((docs) => {
        docs.sort((a, b) => (a.id > b.id ? 1 : -1));
        return docs.map((d) => d.data());
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [collection]);
  console.log(items);
  return convertedItems;
}
