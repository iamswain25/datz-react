import React from "react";
import { firestore } from "../config/firebase";
import useItems from "./useItems";
export default function useCollection(collection: string, order = false) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  const convertedItems = useItems(items);
  React.useEffect(() => {
    let fire = firestore.collection(collection).where("public", "==", true);
    if (order) {
      fire.orderBy("order", "asc");
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
