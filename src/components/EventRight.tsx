import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "./styles";
import EventCardMain from "./EventCardMain";
import { events } from "../@type/events";
import EventCardPastGrey from "./EventCardPastGrey";
import { Link } from "react-router-dom";
import useEvents from "../utils/useEvents";

export default function EventRight() {
  const langEvents = useEvents(events);
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
        <EventCardMain event={langEvents[0]} />
        <EventCardMain event={langEvents[1]} />
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
        {langEvents.map((a, i) => (
          <EventCardPastGrey key={i} event={a} />
        ))}
      </div>
      <Link
        to="events"
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
