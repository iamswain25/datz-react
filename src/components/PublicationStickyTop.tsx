import React from "react";
import pside1 from "../assets/images/legacy/pside1.png";
// import datzpress from "../assets/svg/0524_datzpress.svg";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import useDesktop from "./useDesktop";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 79px;
`;
const mobileContainer = css`
  height: 181px;
  position: relative;
`;
export default function PublicationStickyTop() {
  const isDesktop = useDesktop();
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <img
        src={pside1}
        alt="side-sticky"
        className={
          isDesktop
            ? css`
                height: calc(100vh - 79px - 37px);
              `
            : css`
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: top;
              `
        }
      />
      {/* ${isDesktop ? "absolute" : "relative"}; */}
      <div
        className={css`
          position: absolute;
          top: 0;
          display: flex;
          flex-direction: column;
          color: white;
          align-items: stretch;
          justify-content: stretch;
          width: 100%;
          height: 100%;
          color: #ffffff;
        `}
      >
        <div
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: ${isDesktop ? 19 : 16}px;
            line-height: 1.21;
            text-align: center;
            margin-top: ${isDesktop ? 36 : 22}px;
            height: 23px;
            margin-bottom: 6px;
          `}
        >
          Upcoming Book
        </div>
        <hr
          className={css`
            margin-left: 18px;
            margin-right: 18px;
            border-top: solid 1px #ffffff;
          `}
        />
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: ${isDesktop ? 27 : 22}px;
            line-height: 1.37;
            letter-spacing: 0.54px;
            text-align: center;
            height: ${isDesktop ? 32 : 30}px;
            margin-top: 16px;
          `}
        >
          Heaven On Earth
        </div>
        <div
          className={css`
            font-family: ArnoPro-Display;
            font-size: ${isDesktop ? 21 : 20}px;
            line-height: 1.38;
            letter-spacing: 0.42px;
            text-align: center;
            height: 27px;
          `}
        >
          Linda Connor
        </div>
        <Datzpress
          color="#ffffff"
          className={css`
            position: absolute;
            bottom: 29px;
            left: 32px;
          `}
        />
      </div>
    </div>
  );
}
