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
      .then((snap) => snap.docs.map((d) => d.data()))
      .then((arr) => {
        setItems(arr);
      });
  }, [collection]);
  return convertedItems;
}
