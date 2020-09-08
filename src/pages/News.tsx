import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { paddingH17, paddingH37, marginH17 } from "../components/styles";
import { Grid } from "@material-ui/core";
import { useParams, NavLink } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { news } from "../@type/news";
import AboutHeader from "../components/AboutHeader";
import useNews from "../utils/useNews";
import BtnTop from "../components/BtnTop";
const FILTERS: { [key: string]: string } = {
  all: "All",
  notice: "Notice",
  event: "Upcoming Event",
};
export default function News() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop(true);
  const minusMobile = isDesktop ? 0 : 0;
  const list = useNews(news);
  return (
    <>
      <AboutHeader sticky />
      <section
        className={css`
          font-family: BauerGroteskOTW03;
          background-color: #afafaf;
          text-align: center;
          color: #ffffff;
          ${isDesktop ? paddingH37 : paddingH17}
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
            padding-bottom: 6px;
            border-bottom: solid 1px #ffffff;
            margin-bottom: 12px;
          `}
        >
          Datz Newsletter
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.19;
          `}
        >
          <a
            href="https://page.stibee.com/subscriptions/19745"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
            `}
          >
            Sign up for Datz Newsletter {">"}
          </a>
        </div>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={css`
            color: #cccccc;
            font-size: 16px;
            line-height: 1.19;
            margin-top: 50px;
            margin-bottom: 45px;
          `}
        >
          {Object.keys(FILTERS).map((f, i) => {
            const isFirst = i === 0;
            const isLast = Object.keys(FILTERS).length - 1 === i;
            const marginLeft = isFirst ? 0 : 11 - minusMobile;
            const marginRight = isFirst
              ? 36 - minusMobile
              : isLast
              ? 0
              : 11 - minusMobile;
            return (
              <NavLink
                key={f}
                exact
                to={f}
                activeClassName={css`
                  color: #ffffff;
                  text-decoration: underline;
                `}
                className={css`
                  margin-left: ${marginLeft}px;
                  margin-right: ${marginRight}px;
                `}
              >
                {FILTERS[f]}
              </NavLink>
            );
          })}
        </Grid>
        <Grid container alignItems="center" spacing={isDesktop ? 3 : 1}>
          {list
            .filter((f) =>
              filter === "all" ? true : f.type === FILTERS[filter]
            )
            .map((c, i) => (
              <Grid key={i} item xs={12} sm={6} lg={4}>
                <NewsCard item={c} />
              </Grid>
            ))}
        </Grid>
        <div
          className={css`
            border-top: 1px solid #fff;
            ${isDesktop ? marginH17 : undefined}
            transform: translateY(-1px);
          `}
        >
          <BtnTop full color="#fff" />
        </div>
      </section>
    </>
  );
}
