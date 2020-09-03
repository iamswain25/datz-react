import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import {
  paddingH27,
  paddingH37,
  marginH10,
  marginH18,
} from "../components/styles";
import { Grid } from "@material-ui/core";
import { useParams, NavLink } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { news } from "../@type/news";
import AboutHeader from "../components/AboutHeader";
import useNews from "../utils/useNews";
const FILTERS: { [key: string]: string } = {
  all: "all",
  notice: "Notice",
  event: "Upcoming Event",
};
export default function News() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop();
  const [limit, setLimit] = React.useState(6);
  function viewMoreHandler() {
    setLimit((l) => l + 6);
  }
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
          ${isDesktop ? paddingH37 : paddingH27}
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
            href="newsletter"
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
            // text-transform: uppercase;
          `}
        >
          {Object.keys(FILTERS).map((f) => (
            <NavLink
              key={f}
              exact
              to={f}
              activeClassName={css`
                color: #ffffff;
                text-decoration: underline;
              `}
              className={css`
                ${marginH10}
              `}
            >
              {FILTERS[f]}
            </NavLink>
          ))}
        </Grid>
        <Grid container alignItems="center" spacing={isDesktop ? 3 : 1}>
          {list
            .filter((f) =>
              filter === "all" ? true : f.type === FILTERS[filter]
            )
            .slice(0, limit)
            .map((c, i) => (
              <Grid key={i} item xs={12} sm={6} lg={4}>
                <NewsCard item={c} />
              </Grid>
            ))}
        </Grid>
        <div
          className={css`
            border-top: 1px solid #fff;
            ${marginH18}
            font-size: 14px;
            line-height: 1.21;
            text-align: center;
            color: #ffffff;
            transform: translateY(-1px);
          `}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            className={css`
              height: 28px;
            `}
          >
            <button onClick={viewMoreHandler}>view more {">"}</button>
          </Grid>
        </div>
      </section>
    </>
  );
}
