import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "../components/styles";
import EventCardMain from "../components/EventCardMain";
import { eventcard1, eventcard2, bottomcards } from "../@type/event";
import EventCardPastGrey from "../components/EventCardPastGrey";
import { Link } from "react-router-dom";

export default function EventRight() {
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
        <EventCardMain event={eventcard1} />
        <EventCardMain event={eventcard2} />
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
        {[eventcard1, eventcard2, ...bottomcards].map((a, i) => (
          <EventCardPastGrey key={i} event={a} />
        ))}
      </div>
      <Link
        to="event_past"
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
