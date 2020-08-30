import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import RollingImages from "./RollingImages";
import { exhibitions } from "../@type/exhibition";
import { exhibitionCurrentPast } from "../utils/datefns";
import { useGlobalState, LANG } from "../store/useGlobalState";
import DatzMuseum from "../assets/svg/DatzMuseum";
const headerStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: #707070;
`;
export default function ExhibitionCardMain({ item = exhibitions[0] }) {
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  return (
    <section
      className={css`
        position: relative;
        margin-bottom: 27px;
      `}
    >
      <div
        className={css`
          position: relative;
          height: ${isDesktop ? "auto" : "588px"};
        `}
      >
        <RollingImages images={item.images} />
        <DatzMuseum
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
          <div className={headerStyle}>
            {item.start_date} - {item.end_date}
          </div>
          <div className={headerStyle}>
            {exhibitionCurrentPast(item.start_date, item.end_date)}
          </div>
        </div>
        <div
          className={css`
            overflow: hidden;
            flex: 1;
          `}
        >
          <p
            className={css`
              font-family: BauerGroteskOTW03-Book;
              font-size: 20px;
              line-height: 1.35;
              text-align: center;
              color: #4b4b4b;
            `}
          >
            {lang === "ko" ? item.title_ko : item.title_en}
          </p>
          <p
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 19px;
              line-height: 1.42;
              text-align: left;
              color: #4b4b4b;
              margin-top: 10px;
              height: 178px;
              white-space: break-spaces;
            `}
          >
            {lang === "ko" ? item.body_ko : item.body_en}
          </p>
        </div>

        <Link
          to={`/exhibition/${item.id}`}
          className={css`
            height: 17px;
            border-bottom: solid 1px #707070;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            font-family: BauerGroteskOTW03;
            font-size: 14px;
            line-height: 1.21;
            color: #707070;
            margin-left: 17px;
            margin-right: 17px;
          `}
        >
          read more {">"}
        </Link>
      </div>
    </section>
  );
}
