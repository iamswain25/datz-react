import firebase from "firebase/app";
import { firestore } from "../config/firebase";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React from "react";
export default function useFireSubscription<T>() {
  const { type, collection } = useParams<Param>();
  const fs = React.useMemo(() => {
    let fs = firestore.collection(
      ["banner", "publication_category"].includes(type) ? type : collection
    ) as firebase.firestore.Query;
    if (!type) {
      if (collection === "notice") {
        fs = fs.orderBy("order", "asc");
      }
      return fs;
    } else if (type === "contents") {
      fs = fs.orderBy("order", "desc");
    } else if (type === "publication_category") {
      fs = fs.orderBy("order", "asc");
    } else if (["banner"].includes(type)) {
      fs = fs.where("collection", "==", collection);
      fs = fs.orderBy("order", "asc");
    } else if (["main", "about"].includes(collection)) {
      fs = fs.where("collection", "==", type);
      fs = fs.orderBy("order", "asc");
    } else if (["artist-project", "contact", "support"].includes(collection)) {
      fs = fs.where("type", "==", type);
      fs = fs.orderBy("order", "asc");
    }

    return fs;
  }, [type, collection]);
  return useCollectionData<T>(fs, { idField: "id" });
}
