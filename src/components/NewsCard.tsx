import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { filterExhibitionCurrent } from "../utils/datefns";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { BLEND_SCREEN_COLOR } from "../config/params";
export default function NewsCard({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const isCurrent = filterExhibitionCurrent(item);
  return (
    <Link to={`/news/${item.id}`}>
      <div
        className={css`
          position: relative;
          background-color: ${BLEND_SCREEN_COLOR};
          margin-top: 26px;
          display: flex;
          ::before {
            content: "";
            display: inline-block;
            padding-bottom: 52.91%;
            vertical-align: top;
          }
        `}
      >
        <LazyImage
          alt={`image-${item.id}`}
          link={item.image_cover}
          placeholder={css`
            position: absolute;
          `}
          img={css`
            position: absolute;
            object-fit: cover;
            mix-blend-mode: ${isCurrent ? "soft-light" : "normal"};
            ${isDesktop
              ? `:hover {
              mix-blend-mode: soft-light;
            }`
              : ""}
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
