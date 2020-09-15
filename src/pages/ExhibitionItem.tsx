import React from "react";
import ExhibitionItemLeft from "../components/ExhibitionItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import useDoc from "../utils/useDoc";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function ExhibitionItem() {
  const item = useDoc("exhibition");
  const isDesktop = useDesktop(true);
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
