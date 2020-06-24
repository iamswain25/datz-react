import React from "react";
import { css } from "emotion";
import darkroom from "../assets/svg/0524_darkroom.svg";
import ArrowHorizontal from "./ArrowHorizontal";
const bookStyle = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: BauerGroteskOTW03;
  font-size: 19px;
  
  line-height: 1.21;
  
  text-align: center;
  color: #ffffff;
`;
const subHead = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: ArnoPro-Subhead;
  font-size: 22px;
  
  line-height: 1.36;
  letter-spacing: 0.44px;
  text-align: center;
  color: #ffffff;
`;
const subDesc = css`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: ArnoPro-Display;
  font-size: 26px;
  
  line-height: 1.38;
  letter-spacing: 0.52px;
  text-align: center;
  color: #ffffff;
`;
export default function PastEventsLeft() {
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        margin-right: 14px;
        flex: 1;
      `}
    >
      <div
        className={css`
          padding: 37px;
          width: inherit;
          height: inherit;
          background-image: url(${require("../assets/images/half.jpg")});
          background-repeat: no-repeat;
          flex-direction: column;
          background-size: cover;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          flex: 1;
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <div className={bookStyle}>Past Events ></div>
          <div
            className={css`
              height: 0;
              box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
              border: solid 1px #ffffff;
              margin: 23px;
            `}
          ></div>
          <div className={subHead}>2019.11.11</div>
          <div className={subDesc}>FNL#6 Barbara Bosworth’s Photobook Talk</div>
        </div>
        <div>
          <img
            src={darkroom}
            alt="darkroom"
            className={css`
              height: 30px;
            `}
          />
        </div>
      </div>
      <ArrowHorizontal />
    </section>
  );
}
