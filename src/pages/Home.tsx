import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import EventCoverPage from "../components/EventCoverPage";
import { firestore } from "../firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import coverImg from "../images/cover.jpg";
export default () => {
  const [dataArray, loading, error] = useCollectionDataOnce(
    firestore
      .collection("main")
      .where("isShwoing", "==", true)
      .limit(5)
  );
  if (loading) {
    return null;
  }
  if (dataArray!.length < 1) {
    dataArray?.push({
      image: coverImg,
      title: "Nothing Will Ever be the Same Again",
      type: "New Books",
      author: "Amanda Marchand",
      color: "white",
      isShowing: true
    });
  }
  return (
    <>
      <FullPageRollingImages images={dataArray!} />
      <FullPageRollingImages images={dataArray!} />
      <EventCoverPage />
    </>
  );
};
