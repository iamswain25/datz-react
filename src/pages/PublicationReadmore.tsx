import React from "react";
import PublicationMoreLeft from "../components/PublicationMoreLeft";
import PublicationMoreRight from "../components/PublicationMoreRight";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import {
  flexrow,
  flexcolumn,
  paddingH37,
  paddingH27,
} from "../components/styles";
export default function Publication() {
  const isDesktop = useDesktop();
  return (
    <>
      <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <PublicationMoreLeft />
          <PublicationMoreRight />
        </section>
      </div>
    </>
  );
}
