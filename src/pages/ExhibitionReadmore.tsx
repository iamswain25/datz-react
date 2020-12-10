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
import useDoc from "../utils/useDoc";
export default function ExhibitionReadmore() {
  const isDesktop = useDesktop(true);
  const item = useDoc("exhibition");
  return (
    <>
      <Header sticky={isDesktop} />
      {item?.id && (
        <div className={isDesktop ? paddingH37 : paddingH27}>
          <section className={isDesktop ? flexrow : flexcolumn}>
            <ExhibitionMoreLeft item={item} />
            <ExhibitionMoreRight item={item} />
          </section>
        </div>
      )}
    </>
  );
}
