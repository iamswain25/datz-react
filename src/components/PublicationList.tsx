import React from "react";
import { Link } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { publications } from "../@type/publications";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { imageUrl } from "../config/url";
import { LazyImage } from "react-lazy-images";
import { Grid } from "@material-ui/core";
const subCategories = [["all"], ["Book"], ["Artist book"], ["Magazine"]];
const classes = {
  link: css`
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #707070;
    text-align: center;
  `,
  placeholder: css`
    background-color: grey;
    // width: 100%;
    min-width: 300px;
    min-height: 300px;
  `,
  img: css`
    object-fit: contain;
    width: 100%;
  `,
};
export default function PublicationList() {
  const [selected, setSelected] = React.useState("all");
  const [lang] = useGlobalState(LANG);
  const isDesktop = useDesktop();
  return (
    <>
      <div
        className={css`
          margin-top: ${isDesktop ? 0 : 29}px;
          border-top: ${isDesktop ? 0 : 1}px solid #afafaf;
          margin-left: ${isDesktop ? 27 : 10}px;
          margin-right: ${isDesktop ? 0 : 10}px;
          display: flex;
          flex: 1;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            min-height: 77px;
            justify-content: center;
            align-items: center;
            font-family: BauerGroteskOTW03;
            font-size: 16px;
            line-height: 1.19;
            color: #cccccc;
          `}
        >
          {subCategories.map(([label], i) => {
            let selectedCss = null;
            if (selected === label) {
              selectedCss = css`
                text-decoration: underline;
                color: #383838;
              `;
            }
            function selectHandler() {
              setSelected(label);
            }
            return (
              <div
                key={i}
                onClick={selectHandler}
                className={css`
                  padding-left: 18px;
                  padding-right: 18px;
                  cursor: pointer;
                  ${selectedCss}
                `}
              >
                {label}
              </div>
            );
          })}
        </div>
        <div
          className={css`
            margin-left: ${isDesktop ? 73 : 0}px;
            margin-right: ${isDesktop ? 73 : 0}px;
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          <p
            className={css`
              font-family: ArnoPro-Display;
              font-size: 18px;
              line-height: 1.5;
              letter-spacing: 0.36px;
              text-align: left;
              color: #4b4b4b;
            `}
          >
            Datz specializes in planning and publishing books of artists’ works.
            We looks to preserve artists’ works through publication, and with
            its books it shares their art. As a rule, all work presented at Datz
            Museum are recorded and preserved in book form.
          </p>
          <Grid
            container
            spacing={4}
            justify="center"
            className={css`
              flex: 1;
              font-family: BauerGroteskOTW03;
              padding-bottom: 40px;
            `}
          >
            {publications
              .filter((f) => (selected === "all" ? true : f.type === selected))
              .map((item, i) => {
                return (
                  <Grid item key={i} xs={12} sm={4} md={12} lg={6} xl={3}>
                    <Link
                      to={`publication/${item.id}`}
                      className={classes.link}
                    >
                      <LazyImage
                        alt={lang === "ko" ? item.title_ko : item.title_en}
                        placeholder={({ imageProps, ref }) => (
                          <div ref={ref} className={classes.placeholder} />
                        )}
                        src={imageUrl + item.images.split(`\n`)[0]}
                        actual={({ imageProps }) => (
                          <img
                            {...imageProps}
                            alt={imageProps.alt}
                            className={classes.img}
                          />
                        )}
                      />
                      <span
                        className={css`
                          font-size: 19px;
                          line-height: 1.21;
                        `}
                      >
                        {lang === "ko" ? item.title_ko : item.title_en}
                      </span>
                      <span
                        className={css`
                          margin-top: 4px;
                          font-size: 17px;
                          line-height: 1.35;
                        `}
                      >
                        {lang === "ko" ? item.artist_ko : item.artist_en}
                      </span>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
          <button
            className={css`
              height: 38px;
              border-top: solid 1px #707070;
              padding-bottom: 9px;
              padding-top: 9px;
              text-align: center;
              font-family: BauerGroteskOTW03;
              font-size: 14px;
              line-height: 1.21;
              color: #707070;
            `}
          >
            view more {">"}
          </button>
        </div>
      </div>
    </>
  );
}
