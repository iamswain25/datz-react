import firebase from "firebase";
import { firestore } from "../config/firebase";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";
export default function useFireSubscription2<T>() {
  const { type, collection } = useParams<Param>();
  const fs = React.useMemo(() => {
    let fs = firestore.collection(type) as firebase.firestore.Query;
    if (type === "publication_category") {
      fs = fs.orderBy("order", "desc");
    } else {
      fs = fs.where("collection", "==", collection);
      fs = fs.orderBy("order", "asc");
    }
    return fs;
  }, [type, collection]);
  return useCollectionData<T>(fs, { idField: "id" });
}
