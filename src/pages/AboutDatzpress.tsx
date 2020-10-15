import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
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
  const [classes] = useLang("About");
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
      <ArtistHeader sticky />
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
          <Grid container item xs={12} sm={6}>
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
            {d1 && (
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
                  <h1 className={h1Style(isDesktop)}>{d1.title}</h1>
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
                      ${classes.desc}
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
