import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import { exhibitionCurrentPast } from "../utils/datefns";
import LazyImage from "./LazyImage";
import Logo from "./Logo";
import { bottomBtn37 } from "./styles";
import useLang, { LangKeys } from "./useLang";
export default function MainCard({
  item,
  type = "exhibition",
}: {
  item: any;
  type: string;
}) {
  const { date, title, body, id, preview_body } = item;
  const isDesktop = useDesktop();
  const [classes] = useLang(`${type}MainCard` as LangKeys);
  return (
    <Link to={`/${type}/${id}`}>
      <section
        className={css`
          position: relative;
          margin-bottom: 27px;
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: datz-medium;
        `}
      >
        <div
          className={css`
            position: relative;
            height: ${isDesktop ? "auto" : "527px"};
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
            `}
            img={css`
              position: absolute;
              object-fit: cover;
            `}
          />
          <Logo
            offLink
            type={type === "event" ? item.logo : item.type}
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
            flex: 1 0;
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
            <p className={classes.body}>{preview_body ?? body}</p>
          </div>
          <button
            className={css`
              ${bottomBtn37}
              border-bottom: solid 1px #707070;
            `}
          >
            read more &gt;
          </button>
        </div>
      </section>
    </Link>
  );
}
