import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { bottomBtn37, marginH10, marginH27 } from "../components/styles";
import { Link } from "react-router-dom";
import {
  filterExhibitionCurrent,
  filterExhibitionPast,
} from "../utils/datefns";
import { Grid } from "@material-ui/core";
import ViewAllCard from "./ViewAllCard";
import MainCard from "./MainCard";
import useExhibitions from "../utils/useExhibitions";
import { DEFAULT_COUNT } from "../config/params";
import { firestore } from "../config/firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export default function ExhibitionRight() {
  const isDesktop = useDesktop();
  const [exhibitions] = useCollectionDataOnce<any>(
    firestore
      .collection("exhibition")
      .where("public", "==", true)
      .orderBy("order", "desc")
      .limit(DEFAULT_COUNT * 2),
    { idField: "id" }
  );
  const list = useExhibitions(exhibitions);
  const currentExhibitions = React.useMemo(
    () => list?.filter(filterExhibitionCurrent),
    [list]
  );
  const pastExhibition = React.useMemo(
    () => list?.filter(filterExhibitionPast),
    [list]
  );
  if (!list) return null;
  return (
    <section
      className={css`
        flex: 1;
      `}
    >
      {currentExhibitions && currentExhibitions.length > 0 && (
        <Grid container spacing={isDesktop ? 3 : 0}>
          {currentExhibitions?.map((item, i) => (
            <Grid item xs={12} key={item.id + i}>
              <MainCard item={item} type="exhibition" />
            </Grid>
          ))}
        </Grid>
      )}

      <h1
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 77px;
          font-family: datz-medium;
          font-size: 22px;
          line-height: 1.23;
          text-align: center;
          color: #707070;
          margin-bottom: -15px;
        `}
      >
        Past Exhibition
      </h1>
      <Grid container spacing={isDesktop ? 3 : 0}>
        {pastExhibition
          ?.slice(
            0,
            currentExhibitions && currentExhibitions.length > 0
              ? DEFAULT_COUNT
              : DEFAULT_COUNT * 2
          )
          ?.map((a, i) => (
            <Grid item key={a.id || i} xs={12} md={6} xl={4}>
              <ViewAllCard item={a} type="exhibition" nonWhite />
            </Grid>
          ))}
      </Grid>
      <Link
        to="exhibitions"
        className={css`
          ${bottomBtn37}
          ${isDesktop ? marginH10 : marginH27}
          width: calc(100% - ${isDesktop ? 20 : 54}px);
          transform: translateY(-1px);
          border-top: 1px solid #707070;
        `}
      >
        view all &gt;
      </Link>
    </section>
  );
}
