import React from "react";
import PublicationStickyTop from "../components/PublicationStickyTop";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import PublicationList from "../components/PublicationList";
import {
  flexcolumn,
  paddingH17,
  flexrow,
  paddingH37,
} from "../components/styles";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
const mobileContainer = css`
  ${flexcolumn}
  ${paddingH17}
`;
export default function Publication() {
  const isDesktop = useDesktop();
  return (
    <>
      <Header fixed />
      <section className={isDesktop ? desktopContainer : mobileContainer}>
        <PublicationStickyTop />
        <PublicationList />
      </section>
    </>
  );
}
