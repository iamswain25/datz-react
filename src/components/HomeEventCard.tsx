import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import { exhibitionCurrentPast } from "../utils/datefns";
import LazyImage from "./LazyImage";
import Logo from "./Logo";
import { bottomBtn37 } from "./styles";
import useLang from "./useLang";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
export default function HomeEventCard({
  item,
  type = "exhibition",
}: {
  item: any;
  type: string;
}) {
  const { date, title, body, address } = item;
  const isDesktop = useDesktop();
  const [classes] = useLang(`${type}MainCard`);
  return (
    <Link
      to={`/${type}/${address}`}
      className={css`
        flex: 1;
      `}
    >
      <section
        className={css`
          position: relative;
          margin-bottom: 27px;
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: BauerGroteskOTW03;
        `}
      >
        <div
          className={css`
            position: relative;
            ::before {
              content: "";
              display: inline-block;
              padding-bottom: 60.98%;
              vertical-align: top;
            }
          `}
        >
          <LazyImage
            alt={title}
            link={item.images[0]}
            placeholder={css`
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
              top: 0;
            `}
            img={css`
              position: absolute;
              object-fit: cover;
              width: 100%;
              height: 100%;
            `}
          />
          <Logo
            offLink
            type={item.type}
            color="#fff"
            className={css`
              position: absolute;
              left: 32px;
              bottom: 29px;
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
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding-top: 10px;
              padding-bottom: 10px;
            `}
          >
            <div className={classes.date}>
              {date ?? item.start_date + " - " + item.end_date}
            </div>
            <div className={classes.type}>
              {type === "event"
                ? item.type
                : exhibitionCurrentPast(item.start_date, item.end_date)}
            </div>
          </div>
          <div
            className={css`
              overflow: hidden;
              flex: 1;
            `}
          >
            <p className={classes.title}>{title}</p>
            <p className={classes.body}>{body}</p>
          </div>
          <button
            className={css`
              ${bottomBtn37}
              border-bottom: solid 1px #707070;
            `}
          >
            read more {">"}
          </button>
        </div>
      </section>
    </Link>
  );
}
