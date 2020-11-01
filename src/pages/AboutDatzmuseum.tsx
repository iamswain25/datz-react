import React from "react";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  flexcolumn,
  paddingH17,
  flexcolumncenter,
  paddingH12,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import DatzMuseum from "../assets/svg/DatzMuseum";
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
const pStyle = css`
  font-size: 18px;
  line-height: 1.39;
  text-align: left;
  white-space: break-spaces;
`;
const data = ["datzmuseum-1", "datzmuseum-2"];
export default function AboutDatzmuseum() {
  const isDesktop = useDesktop(true);
  const [classes] = useLang("About");
  const history = useHistory();
  const items = useDocs("about", data);
  const [d1, d2] = useItems(items) || [];
  function onLeft() {
    history.replace("/about/darkroom");
  }
  function onRight() {
    history.replace("/about/datzpress");
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
              <DatzMuseum
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
                  <a
                    href="/museum"
                    className={css`
                      ${flexcolumncenter}
                      font-size: 14px;
                      line-height: 1.21;
                      margin-top: 15px;
                      margin-bottom: 15px;
                    `}
                  >
                    Visit Website {">"}
                  </a>
                  <p className={classes.desc}>{d1.text}</p>
                </div>
                <div>
                  <h2
                    className={css`
                      margin-top: ${isDesktop ? 30 : 73}px;
                      font-size: 17px;
                      line-height: 1.24;
                      text-align: center;
                      padding-bottom: 6px;
                      border-bottom: 1px solid #ffffff;
                    `}
                  >
                    CONTACT
                  </h2>
                  <div
                    className={css`
                      ${pStyle}
                      margin-top: 18px;
                      text-align: center;
                      white-space: break-spaces;
                      margin-bottom: 42px;
                    `}
                  >
                    {d2.text}
                  </div>
                  <BtnBack color="#fff" borderTop />
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
