import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { exhibitions, image } from "../@type/exhibition";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { filterExhibitionCurrent } from "../utils/datefns";
import { useHistory } from "react-router-dom";
export default function ExhibitionCardForViewAll({ item = exhibitions[1] }) {
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  const history = useHistory();
  const isCurrent = filterExhibitionCurrent(item);
  function clickHandler() {
    history.push(`/exhibition/${item.id}`);
  }
  return (
    <section className={css``} onClick={clickHandler}>
      <div
        className={css`
          position: relative;
          background-color: #afafaf;
        `}
      >
        <img
          src={image}
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
            {lang === "ko" ? item.title_ko : item.title_en}
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
            {item.start_date} - {item.end_date}
          </p>
        </div>
      </div>
    </section>
  );
}
