import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import EventCoverPage from "../components/EventCoverPage";
import { firestore } from "../firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Main } from "../@type/main";
export default () => {
  const [dataArray, loading, error] = useCollectionDataOnce<Main>(
    firestore
      .collection("main")
      .where("isShowing", "==", true)
      .limit(5)
  );
  const [dataArray2, loading2, error2] = useCollectionDataOnce<Main>(
    firestore
      .collection("main2")
      .where("isShowing", "==", true)
      .limit(5)
  );
  console.log(dataArray, dataArray2);
  return (
    <>
      {!loading && !error && <FullPageRollingImages images={dataArray} />}
      {!loading2 && !error2 && <FullPageRollingImages images={dataArray2} />}
      <EventCoverPage />
    </>
  );
};
