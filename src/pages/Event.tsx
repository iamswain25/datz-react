import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import EventLeft from "../components/EventLeft";
import EventRight from "../components/EventRight";
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
        <EventLeft />
        <EventRight />
      </section>
    </>
  );
}
