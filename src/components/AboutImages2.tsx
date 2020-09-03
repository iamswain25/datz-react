import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import {
  flexrowcenter,
  fullHeightCoverImg,
  paddingH55,
  marginH24,
} from "./styles";
import m1 from "../assets/images/about/m1.png";
import Datzpress from "../assets/svg/Datzpress";
import DatzBooks from "../assets/svg/DatzBooks";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
const desc2Style = css`
  font-family: ArnoPro-Display;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.4px;
  text-align: left;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 47px;
`;
const absoluteStyle = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  ${paddingH55}
`;
const svgStyle = css`
  height: 30px;
  color: #ffffff;
`;
const vertical = (
  <div
    className={css`
      width: 0;
      height: 29px;
      border-left: solid 1px #ffffff;
      ${marginH24}
    `}
  />
);
export default function AboutImages2() {
  const isDesktop = useDesktop();
  // const [lang] = useGlobalState(LANG);
  return (
    <>
      <section
        className={css`
          position: relative;
          overflow: hidden;
          height: ${isDesktop ? "auto" : "588px"};
        `}
      >
        <img src={m1} alt="cover" className={fullHeightCoverImg} />
        <div className={absoluteStyle}>
          {isDesktop && (
            <div className={flexrowcenter}>
              <Datzpress className={svgStyle} color="#ffffff" />
              {vertical}
              <DatzBooks className={svgStyle} color="#ffffff" />
              {vertical}
              <Darkroom className={svgStyle} color="#ffffff" />
              {vertical}
              <DatzMuseum className={svgStyle} color="#ffffff" />
            </div>
          )}
          <div className={desc2Style}>
            Datz is a home for a collaborative community that shares inspiration
            and looks to restore the positive functionality that is inherent in
            art through random acts of art kindness. Datz is a home for a
            collaborative community that shares inspiration and looks to restore
            the positive functionality that is inherent in art through random
            acts of art kindness.
          </div>
        </div>
      </section>
    </>
  );
}
