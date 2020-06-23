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
  height: calc(100vh - 79px);
  overflow: hidden;
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
      <div style={isDeskTop ? { height: "100vh", overflow: "hidden" } : {}}>
        <Header fixed />
        <section className={isDeskTop ? desktopContainer : mobileContainer}>
          <PublicationStickyTop />
          <PublicationList />
        </section>
      </div>
    </>
  );
}
