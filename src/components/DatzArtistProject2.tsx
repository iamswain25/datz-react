import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import useBanners from "../utils/useBanners";
import LazyImage from "./LazyImage";
import { BLEND_SCREEN_COLOR, DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
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
export default function DatzArtistProject2() {
  const isDesktop = useDesktop();
  const items = useBanners("artists", "Book Project");
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
          const { text, link, artist, image } = item;
          return (
            <Grid item xs={12} sm={4} key={i}>
              <div
                className={css`
                  position: relative;
                  margin-top: 26px;
                  background-color: ${BLEND_SCREEN_COLOR};
                  ::before {
                    content: "";
                    display: inline-block;
                    padding-bottom: 52.91%;
                    vertical-align: top;
                  }
                `}
              >
                <LazyImage
                  link={image}
                  placeholder={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
                    top: 0;
                    left: 0;
                  `}
                  img={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                  `}
                />
              </div>
              <div className={classes.h5}>{text}</div>
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
                <Link to={link || ""} className={classes.h6}>
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
