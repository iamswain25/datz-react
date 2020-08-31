import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { filterExhibitionCurrent } from "../utils/datefns";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
export default function ViewAllCard({
  item,
  type = "exhibition",
}: {
  item: any;
  type: string;
}) {
  const isDesktop = useDesktop();
  const isCurrent = filterExhibitionCurrent(item);
  return (
    <Link to={`/${type}/${item.id}`}>
      <div
        className={css`
          position: relative;
          background-color: #afafaf;
          ::before {
            content: "";
            display: inline-block;
            padding-bottom: 52.91%;
            vertical-align: top;
          }
        `}
      >
        <LazyImage
          alt="ok"
          link={item.images[0]}
          img={css`
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
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
            {item.date ?? item.start_date + " - " + item.end_date}
          </p>
        </div>
      </div>
    </Link>
  );
}
