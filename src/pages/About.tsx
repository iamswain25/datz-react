import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import { paddingH37, paddingH17 } from "../components/styles";
import AboutImages1 from "../components/AboutImages1";
import AboutImages2 from "../components/AboutImages2";
import AboutMap3 from "../components/AboutMap3";

const bgContainer = css`
  background-color: #afafaf;
`;
export default function About() {
  const isDesktop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={bgContainer}>
        <AboutHeader sticky />
        <div className={isDesktop ? paddingH37 : paddingH17}>
          <AboutImages1 />
        </div>
        <AboutImages2 />
        <AboutMap3 />
      </div>
    </>
  );
}
