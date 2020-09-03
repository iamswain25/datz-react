import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import i1 from "../assets/images/artist/i1.png";
import i2 from "../assets/images/artist/i2.png";
import i3 from "../assets/images/artist/i3.png";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
const classes = {
  image: css`
    width: 100%;
    margin-top: 19px;
    object-fit: contain;
  `,
  h6: css`
    margin-top: 6px;
    color: #aaaaaa;
  `,
  h5: css`
    margin-top: 10px;
  `,
};
const items = [
  {
    title: "Nothing Will Ever be the Same Again",
    artist: "Amanda Marchand",
    link: "/publication/",
    image: i1,
  },
  {
    title: "Offerings",
    artist: "Mary Daniel Hobson",
    link: "/publication/",
    image: i2,
  },
  {
    title: "Grace and Gravity",
    artist: "Sangyon Joo",
    link: "/publication/",
    image: i3,
  },
];
export default function DatzArtistProject2() {
  const isDesktop = useDesktop();
  return (
    <Grid
      className={css`
        margin: 43px 0;
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        color: #707070;
        ${isDesktop ? paddingH37 : paddingH17}
      `}
    >
      <Grid
        container
        justify="center"
        className={css`
          font-size: 19px;
          line-height: 1.21;
          margin-bottom: 11px;
        `}
      >
        Projects
      </Grid>
      <Grid container spacing={isDesktop ? 3 : 0}>
        {items.map((item, i) => {
          const { title, link, artist, image } = item;
          return (
            <Grid item xs={12} sm={4} key={i}>
              <img className={classes.image} src={image} alt={title} />
              <div className={classes.h5}>{title}</div>
              <div className={classes.h6}>{artist}</div>
              <div
                className={css`
                  border-top: solid 1px #aaaaaa;
                  padding-top: 10px;
                  margin-top: 20px;
                  margin-left: 16px;
                  margin-right: 16px;
                `}
              >
                <Link to={link} className={classes.h6}>
                  read more {">"}
                </Link>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
