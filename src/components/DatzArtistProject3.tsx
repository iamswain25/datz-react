import React from "react";
import { css } from "emotion";
import { paddingH37 } from "./styles";
import r1 from "../assets/images/artist/r1.png";
import r2 from "../assets/images/artist/r2.png";
import r3 from "../assets/images/artist/r3.png";
import { Grid } from "@material-ui/core";
const classes = {
  image: css`
    width: 100%;
    object-fit: contain;
  `,
  h6: css`
    color: #aaaaaa;
  `,
  h5: css`
    margin-top: 10px;
  `,
};
const items = [
  {
    title: "Siloam",
    artist: "Resident",
    link:
      "A unique nest of creativity, with many inspiring and surprising spaces to be discovered. Accommodation for 7-8 artists. Shared studios are located in this building.",
    image: r1,
  },
  {
    title: "Tree House",
    artist: "Studio",
    link:
      "A unique nest of creativity, with many inspiring and surprising spaces to be discovered. Accommodation for 7-8 artists. Shared studios are located in this building.",
    image: r2,
  },
  {
    title: "Frame",
    artist: "Gallery",
    link:
      "A unique nest of creativity, with many inspiring and surprising spaces to be discovered. Accommodation for 7-8 artists. Shared studios are located in this building.",
    image: r3,
  },
];
export default function DatzArtistProject3() {
  return (
    <Grid
      className={css`
        margin: 43px 0;
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        color: #707070;
        ${paddingH37}
      `}
    >
      <Grid
        container
        justify="center"
        className={css`
          font-size: 19px;
          line-height: 1.21;
          margin-bottom: 30px;
        `}
      >
        <Grid>Facilities</Grid>
        <Grid
          container
          justify="center"
          className={css`
            font-size: 16px;
            line-height: 1.19;
            color: #aaaaaa;
          `}
        >
          Visit DMA for more information {">"}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {items.map((item, i) => {
          const { title, link, artist, image } = item;
          return (
            <Grid item xs={4} key={i}>
              <img className={classes.image} src={image} alt={title} />
              <div className={classes.h5}>{title}</div>
              <div className={classes.h6}>{artist}</div>
              <div
                className={css`
                  height: 17px;
                  border-top: solid 1px #aaaaaa;
                  padding-top: 10px;
                  margin-top: 20px;
                  margin-left: 16px;
                  margin-right: 16px;
                `}
              >
                <div className={classes.h6}>{link}</div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
