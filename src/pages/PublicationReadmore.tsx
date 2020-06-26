import React from "react";
import PublicationReadmoreStickyTop from "../components/PublicationReadmoreStickyTop";
import PublicationReadmoreRelated from "../components/PublicationReadmoreRelated";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
const desktopContainer = css`
  display: flex;
  flex-direction: row;
`;
const mobileContainer = css`
  display: flex;
  flex-direction: column;
`;
const desktopMargin = css`
  padding-left: 37px;
  padding-right: 37px;
`;
const mobileMargin = css`
  padding-left: 17px;
  padding-right: 17px;
`;
export default function Publication() {
  const { id } = useParams();
  console.log(id);
  const isDeskTop = useDesktop();
  return (
    <>
      <Header fixed={isDeskTop} />
      <div className={isDeskTop ? desktopMargin : mobileMargin}>
        <section className={isDeskTop ? desktopContainer : mobileContainer}>
          <PublicationReadmoreStickyTop />
          <PublicationReadmoreRelated />
        </section>
      </div>
    </>
  );
}
