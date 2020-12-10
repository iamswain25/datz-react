import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
import LazyImage from "./LazyImage";
import { BLEND_SCREEN_COLOR, DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
export default function Facilities({ items }: { items: any[] }) {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        margin: 43px 0;
        position: relative;
        font-family: datz-medium;
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
        {items?.map((item, i) => {
          const { text, link, artist, image } = item;
          return (
            <Grid item xs={12} sm={4} key={text + i}>
              <div
                className={css`
                  position: relative;
                  margin-top: ${isDesktop ? "0" : "30px"};
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
              <div
                className={css`
                  margin-top: 10px;
                `}
              >
                {text}
              </div>
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
