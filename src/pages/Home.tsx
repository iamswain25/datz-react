import React from "react";
import FullPageRollingImages from "../components/FullPageRollingImages";
import FullPageRollingImages2 from "../components/FullPageRollingImages2";
import EventCoverPage from "../components/EventCoverPage";
import Footer from "../components/Footer";
import useDevider from "../components/useDevider";
import Header from "../components/Header";
const data1 = [
  {
    id: 1,
    author: "Amanda Marchand",
    color: "#5d5d5d",
    image:
      "https://firebasestorage.googleapis.com/v0/b/datzpress-0.appspot.com/o/3ER4cxyiAuKEsT7pk7yv?alt=media&token=785e0cdb-0f28-4234-9d0c-2677924431ff",
    isShowing: true,
    title: "Nothing Will Ever be the Same Again [SE]",
    type: "New Books  >",
  },
];
const data2 = [
  {
    id: 1,
    author: "2019.11.11 - 2020.1.22",
    color: "#ffffff",
    image:
      "https://firebasestorage.googleapis.com/v0/b/datzpress-0.appspot.com/o/3J3VwS6m7WHH1N5riB2V?alt=media&token=7d1cf479-ec8b-4fa5-be28-9b2707849296",
    isShowing: true,
    title: "Synesthesia : The Space Between",
    type: "Current Exhibition  >",
  },
  {
    id: 2,
    author: "2019.11.11 - 2020.1.22",
    color: "#ffffff",
    image:
      "https://firebasestorage.googleapis.com/v0/b/datzpress-0.appspot.com/o/ACQeGACyyMeQHgnTn2dO?alt=media&token=4fdc3ffd-c286-4850-8039-fea560b9db26",
    isShowing: true,
    title: "Synesthesia : The Space Between",
    type: "Current Exhibition  >",
  },
];
export default () => {
  const devider = useDevider();
  return (
    <>
      <Header sticky />
      <FullPageRollingImages images={data1} />
      {devider}
      <FullPageRollingImages2 images={data2} />
      {devider}
      <EventCoverPage />
      <Footer />
    </>
  );
};
