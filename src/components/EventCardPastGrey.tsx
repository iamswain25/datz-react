import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { bottomcard1 } from "../@type/event";
export default function EventCardPastGrey({ event = bottomcard1 }) {
  const { image, date, title } = event;
  const isDesktop = useDesktop();
  return (
    <section
      className={css`
        margin-top: 26px;
      `}
    >
      <div
        className={css`
          position: relative;
          background-color: #afafaf;
          margin-left: ${isDesktop ? 0 : 17}px;
          margin-right: ${isDesktop ? 0 : 17}px;
        `}
      >
        <img
          src={image}
          alt="ok"
          className={css`
            object-fit: contain;
            width: 100%;
            mix-blend-mode: screen;
          `}
        />
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-left: ${isDesktop ? 17 : 27}px;
          padding-right: ${isDesktop ? 17 : 27}px;
        `}
      >
        <div
          className={css`
            overflow: hidden;
            flex: 1;
            padding-top: 16px;
            padding-bottom: 23px;
            border-bottom: solid 1px #707070;
          `}
        >
          <p
            className={css`
              height: 19px;
              font-family: BauerGroteskOTW03;
              font-size: 16px;
              line-height: 1.19;
              text-align: center;
              color: #707070;
            `}
          >
            {title}
          </p>
          <p
            className={css`
              height: 19px;
              font-family: BauerGroteskOTW03;
              font-size: 16px;
              line-height: 1.19;
              text-align: center;
              color: #afafaf;
            `}
          >
            {date}
          </p>
        </div>
      </div>
    </section>
  );
}
