import React from "react";
import LeftItemStickyTop from "../components/LeftItemStickyTop";
import PublicationItemPhotos from "../components/PublicationItemPhotos";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function Publication() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  return (
    <>
      <Header fixed />
      <section className={isDesktop ? desktopContainer : flexcolumn}>
        <LeftItemStickyTop />
        <PublicationItemPhotos />
      </section>
    </>
  );
}
