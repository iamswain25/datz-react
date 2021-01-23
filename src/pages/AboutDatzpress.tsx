import React from "react";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  flexcolumn,
  paddingH17,
  paddingH12,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useLang from "../components/useLang";
import LazyImage from "../components/LazyImage";
import Logo from "../components/Logo";
import useDocs from "../utils/useDocs";
import useItems from "../utils/useItems";
import BtnShare from "../components/BtnShare";
import DatzBooks from "../assets/svg/DatzBooks";
const h1Style = (isDesktop = false) => css`
  margin-top: ${isDesktop ? 35 : 14}px;
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;

const data = ["datzpress-1", "datzpress-2"];
export default function AboutDatzpress() {
  const items = useDocs("about", data);
  const [d1, d2] = useItems(items) || [];
  const isDesktop = useDesktop(true);
  const [classes, isEn] = useLang("About");
  const history = useHistory();
  function onLeft() {
    history.replace("/about/datzmuseum");
  }
  function onRight() {
    history.replace("/about/darkroom");
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
          overflow: hidden;
        `}
      >
        <Grid container spacing={isDesktop ? 4 : 0}>
          <Grid container item xs={12} sm={6}>
            <div
              className={css`
                position: relative;
                overflow: hidden;
                height: ${isDesktop ? "calc(100vh - 79px - 36px)" : "527px"};
                width: 100%;
              `}
            >
              <LazyImage link={d1?.image} />
              <Logo
                type="datzpress"
                color="#afafaf"
                className={css`
                  bottom: 30px;
                  left: 32px;
                  position: absolute;
                `}
              />
            </div>
          </Grid>
          <Grid container item xs={12} sm={6}>
            {d1 && d2 && (
              <div
                className={css`
                  ${flexcolumnstretch}
                  ${paddingH12}
                  max-height: ${isDesktop
                    ? "calc(100vh - 79px - 16px)"
                    : "auto"};
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
                  <DatzBooks
                    color="#fff"
                    className={css`
                      margin: 20px 0;
                      width: 80px;
                      height: 40px;
                    `}
                  />
                  <p className={classes.desc}>{d2.text}</p>
                  <p className={classes.desc}>
                    <a
                      href={isEn ? d2.url : d1.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css`
                        text-decoration: underline;
                      `}
                    >
                      {d2.title}
                    </a>
                  </p>
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
