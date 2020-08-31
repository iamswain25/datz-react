import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { filterExhibitionCurrent } from "../utils/datefns";
import { Link } from "react-router-dom";
import { makeUrl } from "../config/url";
export default function NewsCard({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const isCurrent = filterExhibitionCurrent(item);
  return (
    <Link to={`/newsitem/${item.id}`}>
      <div
        className={css`
          position: relative;
          background-color: #afafaf;
        `}
      >
        <img
          src={makeUrl(item.images[0])}
          alt="ok"
          className={css`
            object-fit: contain;
            width: 100%;
            mix-blend-mode: ${isCurrent ? "normal" : "screen"};
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
            {item.title}
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
            {item.date}
          </p>
        </div>
      </div>
    </Link>
  );
}
