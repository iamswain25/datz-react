import React from "react";
import PublicationItemLeft from "../components/PublicationItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import usePublicationIndex from "../utils/usePublicationIndex";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function Publication() {
  const { id } = useParams();
  const item = usePublicationIndex(id);
  const isDesktop = useDesktop();
  return (
    <>
      <Header sticky />
      <section className={isDesktop ? desktopContainer : flexcolumn}>
        <PublicationItemLeft item={item} />
        <ItemPhotosRight images={item.images} type="publication" />
      </section>
    </>
  );
}
