import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { filterExhibitionCurrent } from "../utils/datefns";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import Logo from "./Logo";
import { BLEND_SCREEN_COLOR } from "../config/params";
export default function ViewAllCard({
  item,
  type = "exhibition",
  nonWhite = false,
}: {
  item: any;
  type: string;
  nonWhite?: boolean;
}) {
  const isDesktop = useDesktop();
  const isCurrent = filterExhibitionCurrent(item);
  return (
    <Link to={`/${type}/${item.id}`}>
      <div
        className={
          nonWhite
            ? css`
                position: relative;
                margin-top: 26px;
                background-color: ${BLEND_SCREEN_COLOR};
                margin-left: ${isDesktop ? 0 : 17}px;
                margin-right: ${isDesktop ? 0 : 17}px;
                ::before {
                  content: "";
                  display: inline-block;
                  padding-bottom: 52.91%;
                  vertical-align: top;
                }
              `
            : css`
                position: relative;
                margin-top: 26px;
                background-color: ${BLEND_SCREEN_COLOR};
                ::before {
                  content: "";
                  display: inline-block;
                  padding-bottom: 52.91%;
                  vertical-align: top;
                }
              `
        }
      >
        <LazyImage
          alt="ok"
          link={item.images[0]}
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
        <Logo
          offLink
          type={type === "exhibition" ? item.type : item.logo}
          color="#fff"
          absolute
          noPadding
        />
      </div>
      <div
        className={
          nonWhite
            ? css`
                flex: 1;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                padding-left: ${isDesktop ? 17 : 27}px;
                padding-right: ${isDesktop ? 17 : 27}px;
              `
            : css`
                flex: 1;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                padding-left: ${isDesktop ? 22 : 0}px;
                padding-right: ${isDesktop ? 22 : 0}px;
              `
        }
      >
        <div
          className={css`
            padding-top: 16px;
            padding-bottom: 23px;
            border-bottom: solid 1px ${nonWhite ? "#707070" : "#fff"};
          `}
        >
          <p
            className={css`
              font-size: 16px;
              line-height: 1.19;
              text-align: center;
              color: ${nonWhite ? "#707070" : "#fff"};
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
              color: ${nonWhite ? "#afafaf" : "#fff"};
            `}
          >
            {item.date ?? item.start_date + " - " + item.end_date}
          </p>
        </div>
      </div>
    </Link>
  );
}
