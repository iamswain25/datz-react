import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import {
  flexrowcenter,
  fullHeightCoverImg,
  paddingH55,
  marginH24,
  paddingH27,
} from "./styles";
import DatzBooks from "../assets/svg/DatzBooks";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
import Logo from "./Logo";
import useBanners from "../utils/useBanners";
import LazyImage from "./LazyImage";
import useLang from "./useLang";
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
  const [message] = useBanners("about", "Message");
  const [classes] = useLang("body");
  return (
    <>
      <section
        className={css`
          position: relative;
          overflow: hidden;
          height: ${isDesktop ? "auto" : "588px"};
          color: #ffffff;
          max-height: ${isDesktop ? "calc(100vh - 79px)" : "none"};
        `}
      >
        <LazyImage link={message.image} img={fullHeightCoverImg} />
        <div
          className={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            ${isDesktop ? paddingH55 : paddingH27}
          `}
        >
          <div
            className={css`
              max-width: 840px;
            `}
          >
            {isDesktop && (
              <div className={flexrowcenter}>
                <Logo type="datzpress" className={svgStyle} color="#ffffff" />
                {vertical}
                <DatzBooks className={svgStyle} color="#ffffff" />
                {vertical}
                <Darkroom className={svgStyle} color="#ffffff" />
                {vertical}
                <DatzMuseum className={svgStyle} color="#ffffff" />
              </div>
            )}
            <div
              className={css`
                ${classes.book(20, 1.35)}
                text-align: left;
                margin-bottom: 47px;
                margin-top: 24px;
              `}
            >
              {message.text}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
