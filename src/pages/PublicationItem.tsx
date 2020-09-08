import React from "react";
import PublicationItemLeft from "../components/PublicationItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import useItemIndex from "../utils/useItemIndex";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function Publication() {
  const { address } = useParams();
  const item = useItemIndex(address, "publication");
  const isDesktop = useDesktop(true);
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
