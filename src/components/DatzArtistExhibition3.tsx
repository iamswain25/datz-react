import React from "react";
import { css } from "emotion";
import { paddingH55 } from "./styles";
import DatzMuseum from "../assets/svg/DatzMuseum";
import insta from "../assets/images/artist/insta.png";
import { Grid } from "@material-ui/core";
export default function DatzArtistExhibition3() {
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: BauerGroteskOTW03;
        font-size: 23px;
        line-height: 1.17;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        ${paddingH55}
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
        <DatzMuseum color="white" />
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
        <Grid container alignItems="center" justify="center" spacing={3}>
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
            <a
              href="/"
              className={css`
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              Past Exhibition {">"}
            </a>
          </Grid>
          <Grid
            item
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <a
              href="community"
              className={css`
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              Past Event {">"}
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
