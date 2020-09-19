import React from "react";
import { firestore } from "../config/firebase";
import useItems from "./useItems";
export default function useCollectionWhere(
  collection: string,
  where: string,
  field: string = "collection"
) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    console.log(collection, where, field);
    firestore
      .collection(collection)
      .where(field, "==", where)
      .get()
      .then((snap) => snap.docs.map((d) => d.data()))
      .then((arr) => {
        setItems(arr);
      });
  }, [collection, where, field]);
  return convertedItems;
}
