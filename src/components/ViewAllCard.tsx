import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { filterExhibitionCurrent } from "../utils/datefns";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import Logo from "./Logo";
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
                background-color: grey;
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
                background-color: grey;
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
            width: 100%;
            height: 100%;
            background-color: lightgrey;
            top: 0;
          `}
          img={css`
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            mix-blend-mode: ${isCurrent ? "normal" : "screen"};
          `}
        />
        {type === "exhibition" && (
          <Logo
            type={item.type}
            color="#fff"
            className={css`
              position: absolute;
              left: 32px;
              bottom: 29px;
            `}
          />
        )}
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
            overflow: hidden;
            flex: 1;
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
