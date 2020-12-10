import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { paddingH17, paddingH37, marginH17 } from "../components/styles";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import AboutHeader from "../components/AboutHeader";
import useNews from "../utils/useNews";
import BtnTop from "../components/BtnTop";
import Divider from "../components/Divider";
import useParams from "../components/useParams";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
const FILTERS: { [key: string]: string } = {
  all: "All",
  notice: "Notice",
  event: "Upcoming Event",
};
export default function News() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop(true);
  const [items] = useCollectionDataOnce<any>(
    firestore.collection("news").orderBy("order", "desc"),
    { idField: "id" }
  );
  const list = useNews(items);
  return (
    <>
      <AboutHeader sticky />
      <section
        className={css`
          margin-top: 32px;
          font-family: datz-medium;
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
          `}
        >
          Datz Newsletter
        </div>
        <Divider
          color="#fff"
          className={css`
            margin: 5px 18px 12px 18px;
          `}
        />
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
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              max-width: 230px;
              flex: 1;
            `}
          >
            {Object.keys(FILTERS).map((f, i) => {
              const isFirst = i === 0;
              const isLast = Object.keys(FILTERS).length - 1 === i;
              let marginLeft = isFirst ? 0 : 11;
              let marginRight = isFirst ? 36 : isLast ? 0 : 11;
              if (!isDesktop) {
                marginLeft = isFirst ? 0 : 5;
                marginRight = isFirst ? 9 : isLast ? 0 : 5;
              }
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
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {FILTERS[f]}
                </NavLink>
              );
            })}
          </div>
        </Grid>
        <Grid container alignItems="center" spacing={isDesktop ? 3 : 1}>
          {list
            ?.filter((f) =>
              filter === "all" ? true : f.type === FILTERS[filter]
            )
            ?.map((c, i) => (
              <Grid key={c.id + i} item xs={12} sm={6} lg={4}>
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
