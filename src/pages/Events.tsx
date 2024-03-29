import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { paddingH17, paddingH37, marginH18 } from "../components/styles";
import ArtistHeader from "../components/ArtistHeader";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ViewAllCard from "../components/ViewAllCard";
import useEvents from "../utils/useEvents";
import BtnTop from "../components/BtnTop";
import useParams from "../components/useParams";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
const FILTERS: { [key: string]: string } = {
  all: "All",
  talk: "Artist Talk / Lecture",
  exhibition: "Exhibition",
  bookfair: "Book Fair",
};
export default function Events() {
  const { filter = "all" } = useParams();
  const isDesktop = useDesktop(true);
  const [events] = useCollectionDataOnce<any>(
    firestore
      .collection("event")
      .where("public", "==", true)
      .orderBy("order", "desc"),
    { idField: "id" }
  );
  const list = useEvents(events?.slice(2));
  return (
    <>
      <ArtistHeader>
        <ArtistCloseBtn
          to="/event"
          title="< back to Event"
          className={css`
            color: #fff;
          `}
        />
      </ArtistHeader>
      <section
        className={css`
          font-family: datz-medium;
          padding-bottom: 20px;
          ${isDesktop ? paddingH37 : paddingH17}
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
            text-align: center;
            padding-bottom: 6px;
            border-bottom: solid 1px #ffffff;
            margin-bottom: 12px;
          `}
        >
          Past Event
        </div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className={css`
            color: #cccccc;
            font-size: 16px;
            line-height: 1.19;
            margin-bottom: 45px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              max-width: 350px;
              flex: 1 1 350px;
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
                  replace
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
              <Grid key={c.id + i} item xs={12} sm={6} xl={4}>
                <ViewAllCard item={c} type="event" />
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
            justifyContent="center"
            className={css`
              height: 28px;
            `}
          >
            <BtnTop color="#fff" />
          </Grid>
        </div>
      </section>
    </>
  );
}
