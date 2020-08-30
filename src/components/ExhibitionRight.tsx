import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "../components/styles";
import ExhibitionCardMain from "../components/ExhibitionCardMain";
import { exhibitions } from "../@type/exhibitions";
import { Link } from "react-router-dom";
import ExhibitionCardPastGrey from "./ExhibitionCardPastGrey";
import {
  filterExhibitionCurrent,
  filterExhibitionPast,
} from "../utils/datefns";

export default function ExhibitionRight() {
  const isDesktop = useDesktop();
  return (
    <main
      className={css`
        margin-left: ${isDesktop ? 27 : 0}px;
      `}
    >
      <div
        className={css`
          display: ${isDesktop ? "grid" : "flex"};
          flex-direction: column;
          grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          column-gap: 27px;
        `}
      >
        {exhibitions
          .slice(1)
          .filter(filterExhibitionCurrent)
          .map((item, i) => (
            <ExhibitionCardMain item={item} key={i} />
          ))}
      </div>
      <h1
        className={css`
          height: 37px;
          font-family: BauerGroteskOTW03;
          font-size: 22px;
          line-height: 1.23;
          text-align: center;
          color: #707070;
          margin-top: 9px;
          margin-bottom: -15px;
        `}
      >
        Past Exhibition
      </h1>
      <div
        className={css`
          display: ${isDesktop ? "grid" : "flex"};
          flex-direction: column;
          grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
          column-gap: 27px;
        `}
      >
        {exhibitions
          .slice(1)
          .filter(filterExhibitionPast)
          .map((a, i) => (
            <ExhibitionCardPastGrey key={i} item={a} />
          ))}
      </div>
      <Link
        to="exhibitions"
        className={css`
          ${bottomBtn37}
          ${isDesktop
            ? marginH10
            : marginH27}
          width: calc(100% - ${isDesktop ? 20 : 54}px);
          transform: translateY(-1px);
          border-top: 1px solid #707070;
        `}
      >
        view all {">"}
      </Link>
    </main>
  );
}
