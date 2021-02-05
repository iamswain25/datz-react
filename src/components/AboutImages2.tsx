import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { fullHeightCoverImg, paddingH55, paddingH27 } from "./styles";
import LazyImage from "./LazyImage";
import useLang from "./useLang";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
import FooterSvgs from "./FooterSvgs";
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
            {isDesktop && <FooterSvgs isWhite={true} />}
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
