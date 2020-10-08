import React from "react";
import ExhibitionMoreRight from "../components/ExhibitionMoreRight";
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
  const isDesktop = useDesktop(true);
  return (
    <>
      <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <ExhibitionMoreLeft />
          <ExhibitionMoreRight />
        </section>
      </div>
    </>
  );
}
