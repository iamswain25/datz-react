import React from "react";
import { firestore } from "../config/firebase";
import useItems from "./useItems";
export default function useCollectionWherePublic(
  collection: string,
  value: string,
  field: string = "collection"
) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    firestore
      .collection(collection)
      .where(field, "==", value)
      .where("public", "==", true)
      .orderBy("order", "asc")
      .get()
      .then((snap) => snap.docs.map((d) => d.data()))
      .then((arr) => {
        setItems(arr);
      });
  }, [collection, value, field]);
  return convertedItems;
}
