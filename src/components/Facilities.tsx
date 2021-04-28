import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
import LazyImage from "./LazyImage";
import { BLEND_SCREEN_COLOR } from "../config/params";
export default function Facilities({ items }: { items: any[] }) {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        margin: 43px 0 10px;
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
          <a
            href="http://datzmuseum.org"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
            `}
          >
            Visit DMA for more information &gt;
          </a>
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
          const { title, link, text, image } = item;
          return (
            <Grid item xs={12} sm={4} key={title + i}>
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
                    left: 0;
                  `}
                  img={css`
                    position: absolute;
                    left: 0;
                    object-fit: cover;
                  `}
                />
              </div>
              <div
                className={css`
                  margin-top: 10px;
                `}
              >
                {title}
              </div>
              <div
                className={css`
                  color: #aaaaaa;
                `}
              >
                {text}
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
