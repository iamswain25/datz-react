import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { exhibitions } from "../@type/exhibition";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { useHistory } from "react-router-dom";
import { makeUrl } from "../config/url";
export default function ExhibitionCardPastGrey({ item = exhibitions[0] }) {
  const isDesktop = useDesktop();
  const history = useHistory();
  const [lang] = useGlobalState(LANG);
  function clickHandler() {
    history.push(`/exhibition/${item.id}`);
  }
  return (
    <section
      onClick={clickHandler}
      className={css`
        margin-top: 26px;
        cursor: pointer;
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
          src={makeUrl(item.images[0])}
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
            {lang === "ko" ? item.title_ko : item.title_en}
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
            {item.start_date} - {item.end_date}
          </p>
        </div>
      </div>
    </section>
  );
}
