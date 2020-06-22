import React from "react";
import PublicationReadmoreStickyTop from "../components/PublicationReadmoreStickyTop";
import PublicationReadmoreRelated from "../components/PublicationReadmoreRelated";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import PublicationCloseBtn from "../components/PublicationCloseBtn";
const desktopContainer = css`
  display: flex;
  flex-direction: row;
`;
const mobileContainer = css`
  display: flex;
  flex-direction: column;
`;
const desktopMargin = css`
  padding-left: 55px;
  padding-right: 55px;
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
    <div className={isDeskTop ? desktopMargin : mobileMargin}>
      <PublicationCloseBtn />
      <section className={isDeskTop ? desktopContainer : mobileContainer}>
        <PublicationReadmoreStickyTop />
        <PublicationReadmoreRelated />
      </section>
    </div>
  );
}
