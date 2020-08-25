import React from "react";
import PublicationReadmoreRelated from "../components/PublicationReadmoreRelated";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import {
  flexrow,
  flexcolumn,
  paddingH37,
  paddingH27,
} from "../components/styles";
import ExhibitionMoreLeft from "../components/ExhibitionMoreLeft";
export default function ExhibitionReadmore() {
  const isDesktop = useDesktop();
  return (
    <>
     <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <ExhibitionMoreLeft />
          <PublicationReadmoreRelated />
        </section>
      </div>
    </>
  );
}
