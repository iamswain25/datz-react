import React from "react";
import PublicationItemStickyTop from "../components/PublicationItemStickyTop";
import PublicationItemPhotos from "../components/PublicationItemPhotos";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
const desktopContainer = css`
  display: flex;
  flex-direction: row;
  padding-left: 37px;
  padding-right: 37px;
`;
const mobileContainer = css`
  display: flex;
  flex-direction: column;
  padding-left: 17px;
  padding-right: 17px;
`;
export default function Publication() {
  const { id } = useParams();
  console.log(id);
  const isDeskTop = useDesktop();
  return (
    <>
      <Header fixed />
      <section className={isDeskTop ? desktopContainer : mobileContainer}>
        <PublicationItemStickyTop />
        <PublicationItemPhotos />
      </section>
    </>
  );
}
