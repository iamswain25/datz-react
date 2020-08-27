import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import supportImg from "../assets/images/about/support.png";
import SupportTexts from "../components/SupportTexts";
import SupportBottomThree from "../components/SupportBottomThree";
import BtnTop from "../components/BtnTop";
import { paddingH55 } from "../components/styles";
export default function Support() {
  const isDesktop = useDesktop();
  console.log(isDesktop);
  return (
    <>
      <AboutHeader fixed />
      <div
        className={css`
          position: relative;
          display: flex;
        `}
      >
        <img
          src={supportImg}
          alt="supportImg"
          className={css`
            width: 100%;
            min-height: 724px;
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
          ${paddingH55}
        `}
      >
        <BtnTop color="white" borderTop full />
      </div>
    </>
  );
}
