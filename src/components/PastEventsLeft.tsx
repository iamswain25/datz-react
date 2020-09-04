import React from "react";
import { css } from "emotion";
import EventCoverWidget from "./EventCoverWidget";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import useBanners from "../utils/useBanners";
export default function PastEventsLeft() {
  const isDesktop = useDesktop(false);
  const items = useBanners("home", "Past Event");
  const typeClass = css`
    font-family: BauerGroteskOTW03;
    font-size: ${isDesktop ? 19 : 16}px;
    line-height: ${isDesktop ? 1.21 : 1.19};
    text-align: center;
    margin-top: ${isDesktop ? 0 : 5}px;
  `;
  const titleClass = css`
    font-family: ArnoPro-Subhead;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    text-align: center;
    height: 32px;
    overflow: hidden;
  `;
  const authorClass = css`
    font-family: ArnoPro-Display;
    font-size: ${isDesktop ? 21 : 20}px;
    line-height: ${isDesktop ? 1.38 : 1.4};
    letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
    text-align: center;
    margin-top: ${isDesktop ? 4 : 3}px;
  `;
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        margin-right: 14px;
        width: ${isDesktop ? "calc(50% - 14px)" : "100%"};
        position: relative;
      `}
    >
      <EventCoverWidget images={items.map((e) => e.image)} fit="height" />
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
            color: #ffffff;
          `}
        >
          <div className={typeClass}>Past Events {">"}</div>
          <hr
            className={css`
              height: 0;
              border-top: solid 1px #ffffff;
              margin-top: ${isDesktop ? 8 : 3}px;
              margin-bottom: ${isDesktop ? 18 : 16}px;
            `}
          />
          <div className={titleClass}>
            FNL#6 Barbara Bosworth’s Photobook Talk
          </div>
          <div className={authorClass}>2019.11.11</div>
        </div>
        <Logo
          type="darkroom"
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
