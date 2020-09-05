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
  flexcolumncenter,
  paddingH12,
  marginRight30,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import DatzMuseum from "../assets/svg/DatzMuseum";
import { Grid } from "@material-ui/core";
import useLang from "../components/useLang";
import LazyImage from "../components/LazyImage";
import useBanners from "../utils/useBanners";
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
export default function AboutDatzpress() {
  const isDesktop = useDesktop();
  const [classes, en] = useLang("About");
  const history = useHistory();
  const [item] = useBanners("about", "Datz Museum of Art");
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
      <ArtistHeader sticky />
      <div
        className={css`
          ${isDesktop ? paddingH37 : paddingH17}
          ${flexcolumn}
          position: relative;
          min-height: ${isDesktop ? "calc(100vh - 79px - 37px)" : "auto"};
          padding-bottom: 16px;
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
                height: ${isDesktop ? "100%" : "588px"};
              `}
            >
              <LazyImage
                link={item.image}
                img={css`
                  width: 100%;
                  height: inherit;
                  object-fit: cover;
                `}
              />
              <DatzMuseum
                color="#fff"
                className={css`
                  bottom: 29px;
                  left: 32px;
                  position: absolute;
                `}
              />
            </div>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <div
              className={css`
                ${flexcolumnstretch}
                ${paddingH12}
                max-height: ${isDesktop
                  ? "calc(100vh - 79px - 32px)"
                  : "auto"};
                overflow: auto;
              `}
            >
              <div
                className={css`
                  flex: 1;
                `}
              >
                <h1 className={h1Style(isDesktop)}>{item.title}</h1>

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
                <p className={classes.desc}>{item.text}</p>
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
                  <div>{en ? "Phone" : "전화"}</div>
                  <div>+82 2 447 2581</div>
                  <div>-</div>
                  <div>{en ? "Email" : "이메일"}</div>
                  <div>
                    <span className={marginRight30}>D’Ark Room</span>
                    <span className={marginRight30}>
                      <a
                        href="mailto:darkroom@datzpress.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        darkroom@datzpress.com
                      </a>
                    </span>
                  </div>
                </div>
                <BtnBack color="#fff" full borderTop />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
