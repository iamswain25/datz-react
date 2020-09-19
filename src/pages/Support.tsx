import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import SupportTexts from "../components/SupportTexts";
import SupportBottomThree from "../components/SupportBottomThree";
import BtnTop from "../components/BtnTop";
import { paddingH55, paddingH27 } from "../components/styles";
import LazyImage from "../components/LazyImage";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useIsTop from "../components/useIsTop";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
const data = ["main"];
export default function Support() {
  const isDesktop = useDesktop(true);
  const isTop = useIsTop();
  const items = useDocs("support", data);
  const [support] = useItems(items) || [];
  return (
    <>
      <AboutHeader
        fixed
        backgroundColor={isTop ? "transparent" : "#afafaf"}
        color={isTop ? "white" : "#707070"}
      />
      <div
        className={css`
          position: relative;
          display: flex;
          height: 100vh;
        `}
      >
        <LazyImage
          link={support?.image}
          img={css`
            width: 100%;
            background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
            object-fit: cover;
          `}
        />
        <SupportTexts item={support} />
      </div>
      <SupportBottomThree />
      <div
        className={css`
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #afafaf;
          ${isDesktop ? paddingH55 : paddingH27}
        `}
      >
        <BtnTop color="white" borderTop full />
      </div>
    </>
  );
}
