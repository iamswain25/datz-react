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
import Logo from "./Logo";
import LazyImage from "./LazyImage";
import useLang from "./useLang";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
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
const data = ["message"];
export default function AboutImages2() {
  const isDesktop = useDesktop();
  const items = useDocs("about", data);
  const [message] = useItems(items) || [];
  const [classes] = useLang("body");
  return (
    <>
      <section
        className={css`
          position: relative;
          overflow: hidden;
          height: ${isDesktop ? "calc(100vh - 79px)" : "527px"};
          color: #ffffff;
          max-height: ${isDesktop ? "calc(100vh - 79px)" : "none"};
        `}
      >
        <LazyImage link={message?.image} img={fullHeightCoverImg} />
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
                <Logo type="datzbooks" className={svgStyle} color="#ffffff" />
                {vertical}
                <Logo type="darkroom" className={svgStyle} color="#ffffff" />
                {vertical}
                <Logo type="datzmuseum" className={svgStyle} color="#ffffff" />
              </div>
            )}
            <div
              className={css`
                ${classes.book(18, 1.5)}
                text-align: left;
                margin-bottom: 47px;
                margin-top: 24px;
              `}
            >
              {message?.text}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
