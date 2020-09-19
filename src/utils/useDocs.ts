import React from "react";
import { firestore } from "../config/firebase";
export default function useDocs(collection: string, ids: string[]) {
  const [items, setItems] = React.useState<undefined | any[]>(undefined);
  React.useEffect(() => {
    if (!ids) return;
    Promise.all(
      ids?.map((id) =>
        firestore
          .collection(collection)
          .doc(id)
          .get()
          .then((snap) => ({ ...snap.data(), id: snap.id }))
      )
    ).then((arr) => {
      setItems(arr);
    });
  }, [ids, collection]);

  return items;
}
