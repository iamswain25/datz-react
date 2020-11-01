import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { paddingH17, paddingH37, marginH18 } from "../components/styles";
import ArtistHeader from "../components/ArtistHeader";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ViewAllCard from "../components/ViewAllCard";
import useExhibitions from "../utils/useExhibitions";
import { filterExhibitionPast } from "../utils/datefns";
import BtnTop from "../components/BtnTop";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import useParams from "../components/useParams";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
const FILTERS: { [key: string]: string } = {
  all: "All",
  darkroom: "D'Ark Room",
  museum: "Datz Museum of Art",
};
export default function Exhibitions() {
  const { filter = "all" } = useParams();
  const [exhibitions] = useCollectionDataOnce<any>(
    firestore.collection("exhibition").orderBy("order", "desc"),
    { idField: "id" }
  );
  const list = useExhibitions(exhibitions)?.filter(filterExhibitionPast);
  const isDesktop = useDesktop(true);
  return (
    <>
      <ArtistHeader
        className={css`
          color: #707070;
          background-color: white;
        `}
      >
        <ArtistCloseBtn
          to="/exhibition"
          title="< back to Exhibition"
          className={css`
            color: #afafaf;
          `}
        />
      </ArtistHeader>
      <section
        className={css`
          font-family: datz-medium;
          ${isDesktop ? paddingH37 : paddingH17}
          padding-bottom: 20px;
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
          Past Exhibition
        </div>
        <Grid
          container
          alignItems="center"
          justify="center"
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
              max-width: 290px;
              flex: 1;
            `}
          >
            {Object.keys(FILTERS).map((f, i) => {
              const isFirst = i === 0;
              const isLast = Object.keys(FILTERS).length - 1 === i;
              const marginLeft = isFirst ? 0 : 11;
              const marginRight = isFirst ? 36 : isLast ? 0 : 11;
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
              <Grid key={i} item xs={12} sm={6} xl={4}>
                <ViewAllCard item={c} type="exhibition" />
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
        ></div>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={css`
            height: 28px;
          `}
        >
          <BtnTop color="#fff" />
        </Grid>
      </section>
    </>
  );
}
