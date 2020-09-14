import React from "react";
import { Link } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { Publication } from "../@type";
import LazyImage from "./LazyImage";
import { Grid } from "@material-ui/core";
import usePublications from "../utils/usePublications";
import useLang from "./useLang";
import BtnTop from "./BtnTop";
import useBanners from "../utils/useBanners";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
export default function PublicationList() {
  const [selected, setSelected] = React.useState("All");
  const [publications, loading, error] = useCollectionDataOnce<Publication>(
    firestore.collection("publication").orderBy("order", "desc"),
    { idField: "id" }
  );
  const list = usePublications(publications);
  const isDesktop = useDesktop();
  const subCategories = useBanners("publications");
  const [classes] = useLang("PublicationList");
  if (loading) {
    return null;
  }
  if (!list) {
    return null;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
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
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              max-width: 320px;
              flex: 1;
            `}
          >
            {subCategories.map(({ type }, i) => {
              const isLast = subCategories.length - 1 === i;
              const isFirst = i === 0;
              let selectedCss = null;
              if (selected === type) {
                selectedCss = css`
                  text-decoration: underline;
                  color: #383838;
                `;
              }

              let paddingLeft = isFirst ? 0 : 18;
              let paddingRight = isFirst ? 49 : isLast ? 0 : 18;
              if (!isDesktop) {
                paddingLeft = isFirst ? 0 : 5;
                paddingRight = isFirst ? 9 : isLast ? 0 : 5;
              }
              function selectHandler() {
                setSelected(type);
              }
              return (
                <div
                  key={i}
                  onClick={selectHandler}
                  className={css`
                    padding-left: ${paddingLeft}px;
                    padding-right: ${paddingRight}px;
                    cursor: pointer;
                    ${selectedCss}
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {type}
                </div>
              );
            })}
          </div>
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
            {subCategories.find((e) => e.type === selected).text}
          </p>
          <section
            className={css`
              flex: 1;
              margin: 40px 0;
            `}
          >
            <Grid container spacing={isDesktop ? 4 : 0}>
              {list
                .filter((f) =>
                  selected === "All" ? true : f.type === selected
                )
                .map((item, i) => {
                  return (
                    <Grid item key={i} xs={12} sm={12} md={6} lg={4} xl={3}>
                      <Link
                        to={`publication/${item.address}`}
                        className={classes.link}
                      >
                        <LazyImage
                          alt={item.title}
                          link={item.image_cover}
                          img={css`
                            object-fit: contain;
                            width: 280px;
                            height: 280px;
                          `}
                          placeholder={css`
                            background-color: #fff;
                            min-width: 280px;
                            min-height: 280px;
                          `}
                        />
                        <div className={classes.title}>{item.title}</div>
                      </Link>
                      {item.artistAddress && item.type !== "Magazine" ? (
                        <Link
                          to={`artist/${item.artistAddress}`}
                          className={classes.link}
                        >
                          <div className={classes.artist}>{item.artist}</div>
                        </Link>
                      ) : (
                        <div className={classes.link}>
                          <div className={classes.artist}>{item.artist}</div>
                        </div>
                      )}
                    </Grid>
                  );
                })}
            </Grid>
          </section>
          <div
            className={css`
              border-top: solid 1px #707070;
            `}
          >
            <BtnTop full />
          </div>
        </div>
      </div>
    </>
  );
}
