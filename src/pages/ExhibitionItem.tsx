import React from "react";
import ExhibitionItemLeft from "../components/ExhibitionItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import useParams from "../components/useParams";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import useItemIndex from "../utils/useItemIndex";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function ExhibitionItem() {
  const { address } = useParams();
  const item = useItemIndex(address, "exhibition");
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
