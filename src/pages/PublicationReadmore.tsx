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
  padding-left: 27px;
  padding-right: 27px;
`;
export default function Publication() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  return (
    <>
      <Header fixed={isDesktop} />
      <div className={isDesktop ? desktopMargin : mobileMargin}>
        <section className={isDesktop ? desktopContainer : mobileContainer}>
          <PublicationReadmoreStickyTop />
          <PublicationReadmoreRelated />
        </section>
      </div>
    </>
  );
}
