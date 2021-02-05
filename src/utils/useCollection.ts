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
      .then((docs) =>
        docs.map((d) => ({ collection, id: d.id, ...d.data() } as any))
      )
      .then((arr) => {
        arr.sort((a, b) => (a.order > b.order ? 1 : -1));
        setItems(arr);
      });
  }, [collection]);
  return convertedItems;
}
