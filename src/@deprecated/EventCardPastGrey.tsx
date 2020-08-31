import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { events } from "../@type/events";
import { makeUrl } from "../config/url";
import { Link } from "react-router-dom";
export default function EventCardPastGrey({ event = events[0] }) {
  const { images, date, title_en, id } = event;
  const isDesktop = useDesktop();
  return (
    <Link
      to={`/event/${id}`}
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
            {title_en}
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
    </Link>
  );
}
