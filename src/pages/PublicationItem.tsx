import React from "react";
import PublicationItemLeft from "../components/PublicationItemLeft";
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
export default function PublicationItem() {
  const item = useDoc("publication");
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
