import React from "react";
import PublicationStickyTop from "../components/PublicationStickyTop";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import PublicationList from "../components/PublicationList";
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
  const isDeskTop = useDesktop();
  return (
    <>
      <Header fixed />
      <section className={isDeskTop ? desktopContainer : mobileContainer}>
        <PublicationStickyTop />
        <PublicationList />
      </section>
    </>
  );
}
