import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { marginH18, bottomBtn37, marginH10, marginH17 } from "./styles";
import { Grid } from "@material-ui/core";
import Divider from "./Divider";
import AboutImagesGrid from "./AboutImagesGrid";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
const data = ["The community of Datz"];
export default function AboutImages1() {
  const isDesktop = useDesktop();
  const items1 = useDocs("about", data);
  const [main] = useItems(items1) || [];
  const [items2] = useCollectionDataOnce<any[]>(
    firestore
      .collection("about")
      .where("type", "==", "desc")
      .orderBy("order", "asc")
  );
  const items = useItems(items2) || [];
  return (
    <section
      className={
        isDesktop
          ? css`
              height: calc(100vh - 79px);
              min-height: 600px;
              position: relative;
              display: flex;
              flex-direction: column;
            `
          : css`
              background-color: #afafaf;
              min-height: 100vh;
            `
      }
    >
      <section className={isDesktop ? marginH18 : marginH10}>
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
            text-align: center;
            color: #ffffff;
            margin-top: 32px;
          `}
        >
          {main?.title}
        </div>
        {main && (
          <Divider
            color="#fff"
            className={css`
              margin-top: 5px;
            `}
          />
        )}
      </section>
      <Grid
        container
        spacing={isDesktop ? 3 : 0}
        className={css`
          padding-top: ${isDesktop ? 37 : 10}px;
          flex: 1;
          overflow: hidden;
        `}
      >
        {items?.map((item, i) => (
          <AboutImagesGrid key={i} item={item} />
        ))}
      </Grid>

      {items?.length > 0 && (
        <div
          className={css`
            margin: 0 17px;
            position: relative;
          `}
        >
          <div
            id="message"
            className={css`
              position: absolute;
              top: ${isDesktop ? -11 : -42}px;
            `}
          />
          <a
            className={css`
              ${bottomBtn37}
              color: #ffffff;
              margin-top: ${isDesktop ? 30 : 0}px;
              border-top: solid ${isDesktop ? 1 : 0}px #ffffff;
              ${isDesktop ? "" : marginH17}
              width: ${isDesktop ? "100%" : "calc(100% - 34px)"};
            `}
            href="#message"
          >
            message &gt;
          </a>
        </div>
      )}
    </section>
  );
}
