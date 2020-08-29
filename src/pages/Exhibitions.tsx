import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import {
  paddingH27,
  paddingH37,
  marginH20,
  marginH18,
} from "../components/styles";
import ArtistHeader from "../components/ArtistHeader";
import { Grid } from "@material-ui/core";
import { useParams, NavLink } from "react-router-dom";
import ExhibitionCardForViewAll from "../components/ExhibitionCardForViewAll";
import { exhibitions } from "../@type/exhibition";
const FILTERS: { [key: string]: string } = {
  all: "all",
  darkroom: "D’Ark Room",
  museum: "Datz Museum of Art",
};
export default function Exhibitions() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop();
  return (
    <>
      <ArtistHeader sticky closeTo="/exhibition" />
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
          Past Exhibition
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
                ${marginH20}
              `}
            >
              {FILTERS[f]}
            </NavLink>
          ))}
        </Grid>
        <Grid container alignItems="center" spacing={isDesktop ? 3 : 1}>
          {exhibitions
            .slice(1)
            .filter((f) =>
              filter === "all" ? true : f.type === FILTERS[filter]
            )
            .map((c, i) => (
              <Grid key={i} item xs={6} xl={4}>
                <ExhibitionCardForViewAll item={c} />
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
          >
            view more {">"}
          </Grid>
        </div>
      </section>
    </>
  );
}
