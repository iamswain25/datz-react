import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { events } from "../@type/events";
import { makeUrl } from "../config/url";
export default function EventCardForViewAll({ event = events[0] }) {
  const { images, date, title_en } = event;
  const isDesktop = useDesktop(false);
  return (
    <section className={css``}>
      <div
        className={css`
          position: relative;
          background-color: #afafaf;
        `}
      >
        <img
          src={makeUrl(images[0])}
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
          padding-left: ${isDesktop ? 22 : 0}px;
          padding-right: ${isDesktop ? 22 : 0}px;
        `}
      >
        <div
          className={css`
            overflow: hidden;
            flex: 1;
            padding-top: 16px;
            padding-bottom: 23px;
            border-bottom: solid 1px #fff;
          `}
        >
          <p
            className={css`
              font-size: 16px;
              line-height: 1.19;
              text-align: center;
              color: #fff;
            `}
          >
            {title_en}
          </p>
          <p
            className={css`
              margin-top: 6px;
              font-size: 14px;
              line-height: 1.21;
              text-align: center;
              color: #ffffff;
            `}
          >
            {date}
          </p>
        </div>
      </div>
    </section>
  );
}
