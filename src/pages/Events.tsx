import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import {
  paddingH27,
  paddingH37,
  marginH18,
  marginH8,
} from "../components/styles";
import ArtistHeader from "../components/ArtistHeader";
import { Grid } from "@material-ui/core";
import { useParams, NavLink } from "react-router-dom";
import { events } from "../@type/events";
import ViewAllCard from "../components/ViewAllCard";
import useEvents from "../utils/useEvents";
const FILTERS: { [key: string]: string } = {
  all: "all",
  talk: "Artist Talk / Lecture",
  exhibition: "Exhibition",
  bookfair: "Book Fair",
};
export default function Events() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop();
  const list = useEvents(events.slice(2));
  return (
    <>
      <ArtistHeader sticky closeTo="/event" />
      <section
        className={css`
          font-family: BauerGroteskOTW03;
          background-color: #afafaf;
          color: #ffffff;
          ${isDesktop ? paddingH37 : paddingH27}
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
            text-align: center;
            padding-bottom: 6px;
            border-bottom: solid 1px #ffffff;
            margin-bottom: 12px;
          `}
        >
          Past Event
        </div>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={css`
            color: #cccccc;
            font-size: 16px;
            line-height: 1.19;
            margin-bottom: 45px;
          `}
        >
          {Object.keys(FILTERS).map((f) => (
            <NavLink
              key={f}
              exact
              to={f}
              activeClassName={css`
                color: #ffffff;
                text-decoration: underline;
              `}
              className={css`
                ${marginH8}
              `}
            >
              {FILTERS[f]}
            </NavLink>
          ))}
        </Grid>
        <Grid container alignItems="center" spacing={isDesktop ? 3 : 1}>
          {list
            .filter((f) =>
              filter === "all" ? true : f.type === FILTERS[filter]
            )
            .map((c, i) => (
              <Grid key={i} item xs={12} sm={6} xl={4}>
                <ViewAllCard item={c} type="event" />
              </Grid>
            ))}
        </Grid>
        <div
          className={css`
            border-top: 1px solid #fff;
            ${marginH18}
            font-size: 14px;
            line-height: 1.21;
            text-align: center;
            color: #ffffff;
            transform: translateY(-1px);
          `}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            className={css`
              height: 28px;
            `}
          ></Grid>
        </div>
      </section>
    </>
  );
}
