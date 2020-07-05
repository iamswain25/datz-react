import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
// import { useGlobalState, LANG } from "../store/useGlobalState";
import {
  flexrowcenter,
  fullCoverImg,
  paddingH55,
  marginH24,
  bottomBtn37,
} from "./styles";
import m1 from "../assets/images/about/m1.png";
import Datzpress from "../assets/svg/Datzpress";
import DatzBooks from "../assets/svg/DatzBooks";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
const messagesStyle = css`
  ${bottomBtn37}
  color: #ffffff;
  margin-top: 47px;
  border-top: solid 1px #ffffff;
`;
const desc2Style = css`
  font-family: ArnoPro-Display;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.4px;
  text-align: left;
  color: #ffffff;
  margin-top: 24px;
`;
const sectionStyle = css`
  position: relative;
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
      <section className={sectionStyle}>
        <img src={m1} alt="cover" className={fullCoverImg} />
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
          <a className={messagesStyle} href="/visit">
            visit {">"}
          </a>
        </div>
      </section>
    </>
  );
}
