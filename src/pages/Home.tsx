import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import FullPageRollingImages2 from "../components/FullPageRollingImages2";
import EventCoverPage from "../components/EventCoverPage";
import { firestore } from "../firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Main } from "../@type/main";
import { css } from "emotion";
const devider = (
  <div
    className={css`
      margin-left: 47px;
      margin-right: 47px;
      height: 0;
      border: solid 1px #afafaf;
    `}
  />
);
export default () => {
  const [dataArray, loading, error] = useCollectionDataOnce<Main>(
    firestore.collection("main").where("isShowing", "==", true).limit(5)
  );
  const [dataArray2, loading2, error2] = useCollectionDataOnce<Main>(
    firestore.collection("main2").where("isShowing", "==", true).limit(5)
  );
  console.log(dataArray, dataArray2);
  return (
    <>
      {!loading && !error && <FullPageRollingImages images={dataArray} />}
      {devider}
      {!loading2 && !error2 && <FullPageRollingImages2 images={dataArray2} />}
      {devider}
      <EventCoverPage />
    </>
  );
};
