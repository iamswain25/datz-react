import React from "react";
import { css } from "emotion";
import Darkroom from "../assets/svg/Darkroom";
import EventCoverWidget from "./EventCoverWidget";
import useDesktop from "./useDesktop";
const bookStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 19px;
  line-height: 1.21;
  text-align: center;
  color: #ffffff;
`;
const subTime = css`
  font-family: ArnoPro-Display;
  font-size: 21px;
  line-height: 1.38;
  letter-spacing: 0.42px;
  text-align: center;
  color: #ffffff;
  margin-top: 4px;
`;
const subDesc = css`
  font-family: ArnoPro-Subhead;
  font-size: 27px;
  line-height: 1.37;
  letter-spacing: 0.54px;
  color: #ffffff;
  height: 32px;
  overflow: hidden;
`;
export default function PastEventsLeft() {
  const isDesktop = useDesktop();
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        margin-right: 14px;
        flex: 1;
        position: relative;
      `}
    >
      <EventCoverWidget />
      <div
        className={css`
          padding: 37px;
          padding-left: 17px;
          padding-right: 17px;
          width: 100%;
          height: calc(100% - 40px);
          background-repeat: no-repeat;
          flex-direction: column;
          background-size: cover;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          flex: 1;
          position: absolute;
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <div className={bookStyle}>Past Events {">"}</div>
          <div
            className={css`
              height: 0;
              border-bottom: solid 1px #ffffff;
              margin-top: 7px;
              margin-bottom: 17px;
            `}
          ></div>
          <div className={subDesc}>FNL#6 Barbara Bosworth’s Photobook Talk</div>
          <div className={subTime}>2019.11.11</div>
        </div>
        <Darkroom
          color="#ffffff"
          className={css`
            position: absolute;
            left: ${isDesktop ? 23 : 32}px;
            bottom: ${isDesktop ? 29 : 32}px;
          `}
        />
      </div>
    </section>
  );
}
