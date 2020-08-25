import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import ExhibitionRight from "../components/ExhibitionRight";
import ExhibitionLeft from "../components/ExhibitionLeft";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
const mobileContainer = css`
  ${flexcolumn}
`;
export default function Event() {
  const isDesktop = useDesktop();
  return (
    <>
     <Header sticky />
      <section className={isDesktop ? desktopContainer : mobileContainer}>
        <ExhibitionLeft />
        <ExhibitionRight />
      </section>
    </>
  );
}
