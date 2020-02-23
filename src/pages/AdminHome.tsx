import React from "react";
import FullPageRollingImagesEdit from "../components/FullPageRollingImagesEdit";
import { firestore } from "../firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Main } from "../@type/main";
import coverImg from "../images/cover.jpg";
const newMain = {
  image: coverImg,
  title: "Nothing Will Ever be the Same Again",
  type: "New Books",
  author: "Amanda Marchand",
  color: "white",
  isShowing: true
};
export default () => {
  const [dataArray, loading, error] = useCollectionDataOnce<Main>(
    firestore
      .collection("main")
      .orderBy("isShowing", "desc")
      .limit(5)
  );

  if (loading) {
    return null;
  }
  if (dataArray!.length < 1) {
    dataArray?.push(newMain);
  }
  return (
    <>
      <FullPageRollingImagesEdit images={dataArray!} />
    </>
  );
};
