import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "../components/styles";
import { exhibitions } from "../@type/exhibitions";
import { Link } from "react-router-dom";
import {
  filterExhibitionCurrent,
  filterExhibitionPast,
} from "../utils/datefns";
import { Grid } from "@material-ui/core";
import ViewAllCard from "./ViewAllCard";
import MainCard from "./MainCard";
import useExhibitions from "../utils/useExhibitions";
import { DEFAULT_COUNT } from "../config/params";

export default function ExhibitionRight() {
  const isDesktop = useDesktop();
  const list = useExhibitions(exhibitions);
  const currentExhibitions = list.filter(filterExhibitionCurrent);
  return (
    <main
      className={css`
        margin-left: ${isDesktop ? 27 : 0}px;
      `}
    >
      <Grid container spacing={isDesktop ? 3 : 0}>
        {currentExhibitions.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={currentExhibitions.length > 1 ? 6 : 12}
            key={i}
          >
            <MainCard item={item} type="exhibition" />
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
        Past Exhibition
      </h1>
      <Grid container spacing={isDesktop ? 3 : 0}>
        {list
          .filter(filterExhibitionPast)
          .slice(0, DEFAULT_COUNT)
          .map((a, i) => (
            <Grid item key={i} xs={12} md={6} xl={4}>
              <ViewAllCard item={a} type="exhibition" nonWhite />
            </Grid>
          ))}
      </Grid>
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
