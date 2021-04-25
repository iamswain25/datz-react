import firebase from "firebase";
import { firestore } from "../config/firebase";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";
export default function useFireSubscription<T>() {
  const { type, collection } = useParams<Param>();
  const fs = React.useMemo(() => {
    let fs = firestore.collection(collection) as firebase.firestore.Query;
    if (!type) {
      return fs;
    } else if (type === "contents") {
      fs = fs.orderBy("order", "desc");
    } else if (["artist-project", "contact"].includes(collection)) {
      fs = fs.where("type", "==", type);
      fs = fs.orderBy("order", "asc");
    } else {
      fs = fs.where("collection", "==", type);
      fs = fs.orderBy("order", "asc");
    }
    return fs;
  }, [type, collection]);
  return useCollectionData<T>(fs, { idField: "id" });
}