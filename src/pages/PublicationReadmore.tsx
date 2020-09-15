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
import useDoc from "../utils/useDoc";
export default function PublicationReadmore() {
  const isDesktop = useDesktop(true);
  const item = useDoc("publication");
  return (
    <>
      <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <PublicationMoreLeft item={item} />
          <PublicationMoreRight item={item} />
        </section>
      </div>
    </>
  );
}
