import React from "react";
import ExhibitionItemLeft from "../components/ExhibitionItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import useExhibitionIndex from "../utils/useExhibitionIndex";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function ExhibitionItem() {
  const { id = 1 } = useParams();
  const item = useExhibitionIndex(id);
  const isDesktop = useDesktop();
  return (
    <>
      <Header sticky />
      <section className={isDesktop ? desktopContainer : flexcolumn}>
        <ExhibitionItemLeft item={item} />
        <ItemPhotosRight images={item.images} type="exhibition" />
      </section>
    </>
  );
}
