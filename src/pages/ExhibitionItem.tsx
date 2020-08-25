import React from "react";
import ExhibitionItemLeft from "../components/ExhibitionItemLeft";
import PublicationItemPhotos from "../components/PublicationItemPhotos";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import { exhibitions } from "../@type/exhibition";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function Publication() {
  const { id = 1 } = useParams();
  const isDesktop = useDesktop();
  return (
    <>
      <Header fixed />
      <section className={isDesktop ? desktopContainer : flexcolumn}>
        <ExhibitionItemLeft item={exhibitions[Number(id)]} />
        <PublicationItemPhotos />
      </section>
    </>
  );
}
