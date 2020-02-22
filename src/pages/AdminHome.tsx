import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import { useDownloadURL } from "react-firebase-hooks/storage";
// import EventCoverPage from "../components/EventCoverPage";
import { storage } from "../firebase";
export default () => {
  const [image1] = useDownloadURL(storage.ref().child("cover.jpg"));
  const [image2] = useDownloadURL(storage.ref().child("cover2.jpg"));
  const [image3] = useDownloadURL(storage.ref().child("cover.jpg"));
  return (
    <>
      <FullPageRollingImages images={[image1, image2, image3]} />
    </>
  );
};
