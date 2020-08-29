import React from "react";
import FullPageRollingImagesEdit from "../components/FullPageRollingImagesEdit";
import { firestore } from "../config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Main } from "../@type/main";

export default () => {
  const [dataArray, loading, error] = useCollectionData<Main>(
    firestore
      .collection("main")
      .orderBy("isShowing", "desc")
      .limit(5),
    { idField: "id" }
  );
  const [dataArray2, loading2, error2] = useCollectionData<Main>(
    firestore
      .collection("main2")
      .orderBy("isShowing", "desc")
      .limit(5),
    { idField: "id" }
  );
  if (loading) {
    return null;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <>
      {!loading && !error && <FullPageRollingImagesEdit images={dataArray!} collection="main" />}
      {!loading2 && !error2 && (
        <FullPageRollingImagesEdit images={dataArray2!} collection="main2" />
      )}
    </>
  );
};
