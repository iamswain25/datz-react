import React from "react";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
// import png from "../assets/svg/1015_dfrontspace.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  paddingH12,
  flexcolumn,
  paddingH17,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import Darkroom from "../assets/svg/Darkroom";
import { Grid } from "@material-ui/core";
import useLang from "../components/useLang";
import LazyImage from "../components/LazyImage";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
import BtnShare from "../components/BtnShare";
const h1Style = (isDesktop = false) => css`
  margin-top: ${isDesktop ? 35 : 14}px;
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;
const data = ["darkroom-1"];
export default function AboutDarkroom() {
  const isDesktop = useDesktop(true);
  const [classes] = useLang("About");
  const items = useDocs("about", data);
  const [d1] = useItems(items) || [];
  const history = useHistory();
  function onLeft() {
    history.replace("/about/datzpress");
  }
  function onRight() {
    history.replace("/about/datzmuseum");
  }
  return (
    <>
      {isDesktop && (
        <div>
          <Arrow
            children={"←"}
            onClick={onLeft}
            className={css`
              color: #ffffff;
              top: 50%;
              transform: translateY(-50%);
              left: 13px;
            `}
          />
          <Arrow
            children={"→"}
            onClick={onRight}
            className={css`
              color: #ffffff;
              top: 50%;
              transform: translateY(-50%);
              right: 13px;
            `}
          />
        </div>
      )}
      <ArtistHeader>
        <ArtistCloseBtn
          title="< back to About"
          to="/about"
          className={css`
            color: #fff;
          `}
        />
      </ArtistHeader>
      <div
        className={css`
          ${isDesktop ? paddingH37 : paddingH17}
          ${flexcolumn}
          position: relative;
          min-height: ${isDesktop ? "calc(100vh - 79px)" : "auto"};
          padding-bottom: ${isDesktop ? 16 : 0}px;
        `}
      >
        <Grid
          container
          spacing={isDesktop ? 4 : 0}
          className={css`
            flex: 1;
          `}
        >
          <Grid item xs={12} sm={6}>
            <div
              className={css`
                position: relative;
                overflow: hidden;
                height: ${isDesktop ? "calc(100% - 36px)" : "588px"};
              `}
            >
              <LazyImage
                link={d1?.image}
                img={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
              <Darkroom
                color="#fff"
                className={css`
                  bottom: 30px;
                  left: 32px;
                  position: absolute;
                `}
              />
            </div>
          </Grid>
          <Grid container item xs={12} sm={6}>
            {d1 && (
              <div
                className={css`
                  ${flexcolumnstretch}
                  ${paddingH12}
                max-height: ${isDesktop ? "calc(100vh - 79px - 16px)" : "auto"};
                  overflow: auto;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      align-items: flex-start;
                      margin-bottom: 20px;
                      margin-top: ${isDesktop ? 0 : 20}px;
                    `}
                  >
                    <BtnShare title={d1.title} color="#ececec" />
                  </div>
                  <h1 className={h1Style(isDesktop)}>{d1.title}</h1>
                  <p className={classes.desc}>{d1.text}</p>
                  {/* <img
                    src={png}
                    alt="png"
                    className={css`
                      width: 200px;
                      margin-top: 30px;
                    `}
                  /> */}
                </div>
                <hr
                  className={css`
                    border-style: solid;
                    border-width: 0;
                    border-top: solid 1px #fff;
                    height: 37px;
                  `}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
