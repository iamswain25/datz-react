import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "./styles";
import EventCardMain from "./EventCardMain";
import { events } from "../@type/events";
import EventCardPastGrey from "./EventCardPastGrey";
import { Link } from "react-router-dom";
import useEvents from "../utils/useEvents";
import { Grid } from "@material-ui/core";
// import { filterExhibitionCurrent } from "../utils/datefns";
export default function EventRight() {
  const list = useEvents(events);
  // const currentEvents = list.filter(filterExhibitionCurrent);
  const isDesktop = useDesktop();
  return (
    <main
      className={css`
        margin-left: ${isDesktop ? 27 : 0}px;
      `}
    >
      <Grid container spacing={3}>
        {list.slice(0, 2).map((item, i) => (
          <Grid item xs={12} xl={6} key={i}>
            <EventCardMain event={item} />
          </Grid>
        ))}
      </Grid>
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
      <Grid container spacing={3}>
        {list.slice(2, 8).map((a, i) => (
          <Grid item key={i} xs={12} sm={6} xl={4}>
            <EventCardPastGrey event={a} />
          </Grid>
        ))}
      </Grid>
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
