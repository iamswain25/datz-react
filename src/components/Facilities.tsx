import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
import useBanners from "../utils/useBanners";
import LazyImage from "./LazyImage";
const classes = {
  h5: css`
    margin-top: 10px;
  `,
};
export default function Facilities() {
  const isDesktop = useDesktop();
  const items = useBanners("artists", "Datz Artist Residency");
  return (
    <div
      className={css`
        margin: 43px 0;
        position: relative;
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
          margin-bottom: ${isDesktop ? "30px" : 0};
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
      <Grid
        container
        spacing={isDesktop ? 3 : 0}
        className={css`
          position: relative;
        `}
      >
        {items.map((item, i) => {
          const { text, link, artist, image } = item;
          return (
            <Grid item xs={12} sm={4} key={i}>
              <LazyImage
                link={image}
                img={css`
                  width: 100%;
                  margin-top: ${isDesktop ? "0" : "30px"};
                  height: ${isDesktop ? "100%" : "auto"};
                  object-fit: cover;
                `}
              />
              <div className={classes.h5}>{text}</div>
              <div
                className={css`
                  color: #aaaaaa;
                `}
              >
                {artist}
              </div>
              <div
                className={css`
                  border-top: solid 1px #aaaaaa;
                  padding-top: 10px;
                  margin-top: 20px;
                  margin-left: 16px;
                  margin-right: 16px;
                `}
              >
                <div
                  className={css`
                    color: #aaaaaa;
                  `}
                >
                  {link}
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
