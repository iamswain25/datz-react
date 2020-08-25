import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "../components/styles";
import ExhibitionCardMain from "../components/ExhibitionCardMain";
import { exhi1, exhi2, bottomcards } from "../@type/event";
import EventCardPastGrey from "../components/EventCardPastGrey";
import { Link } from "react-router-dom";

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
        <ExhibitionCardMain event={exhi1} />
        <ExhibitionCardMain event={exhi2} />
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
        Past Event
      </h1>
      <div
        className={css`
          display: ${isDesktop ? "grid" : "flex"};
          flex-direction: column;
          grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
          column-gap: 27px;
        `}
      >
        {[exhi1, exhi2, ...bottomcards].map((a, i) => (
          <EventCardPastGrey key={i} event={a} />
        ))}
      </div>
      <Link
        to="exhibitions"
        className={css`
          ${bottomBtn37}
          ${isDesktop ? marginH10 : marginH27}
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
