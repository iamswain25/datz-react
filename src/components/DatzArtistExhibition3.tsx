import React from "react";
import { css } from "emotion";
import { paddingH55, paddingH27 } from "./styles";
import insta from "../assets/images/artist/insta.png";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import { Link } from "react-router-dom";
export default function DatzArtistExhibition3() {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: datz-medium;
        font-size: 23px;
        line-height: 1.17;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        ${isDesktop ? paddingH55 : paddingH27}
      `}
    >
      <div
        className={css`
          flex: 1;
        `}
      ></div>
      <div
        className={css`
          margin-bottom: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {isDesktop && <Logo type="datzmuseum" color="white" />}
        <div
          className={css`
            margin-top: 34px;
            max-width: 600px;
            font-size: 19px;
            line-height: 1.42;
            margin-bottom: 27px;
          `}
        >
          D’Aark Room/D’Front Space, a complex cultural spaces in Seoul, are
          book project spaces on Datz Press that organize exhibitions with
          books, and meets audiences through artist talks and portfolio reviews.
        </div>
        <Grid container alignItems="center" justifyContent="center" spacing={3}>
          <Grid item>
            <a href="/">
              <img src={insta} alt="insta" />
            </a>
          </Grid>
          <Grid
            item
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <Link
              to="/exhibitions"
              className={css`
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              Past Exhibition &gt;
            </Link>
          </Grid>
          <Grid
            item
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <Link
              to="/events"
              className={css`
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              Past Event &gt;
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
