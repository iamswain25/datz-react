import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import supportImg from "../assets/images/about/support.png";
import SupportTexts from "../components/SupportTexts";
import SupportBottomThree from "../components/SupportBottomThree";
import BtnTop from "../components/BtnTop";
import { paddingH55, paddingH27 } from "../components/styles";
import LazyImage from "../components/LazyImage";
export default function Support() {
  const isDesktop = useDesktop();
  console.log(isDesktop);
  return (
    <>
      <AboutHeader change backgroundColor="transparent" />
      <div
        className={css`
          position: relative;
          display: flex;
          height: 100vh;
        `}
      >
        <LazyImage
          link={supportImg}
          img={css`
            width: 100%;
            object-fit: cover;
          `}
        />
        <SupportTexts />
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
