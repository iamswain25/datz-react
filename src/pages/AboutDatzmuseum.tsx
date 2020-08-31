import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import d4 from "../assets/images/about/d4.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  marginH10,
  flexcolumn,
  paddingH17,
  flexcolumncenter,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import DatzMuseum from "../assets/svg/DatzMuseum";
import { Grid } from "@material-ui/core";
const twoColumns = css`
  ${paddingH37}
  position: relative;
  height: calc(100vh - 79px);
`;
const mobileContainer = css`
  ${paddingH17}
  ${flexcolumn}
`;
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  function onLeft() {
    history.push("/about/darkroom");
  }
  function onRight() {
    history.push("/about/datzpress");
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
      <div className={isDesktop ? twoColumns : mobileContainer}>
        <Grid
          container
          spacing={4}
          className={css`
            height: 100%;
          `}
        >
          <Grid item xs={12} sm={6}>
            <div
              className={css`
                height: ${isDesktop ? "calc(100% - 37px)" : "588px"};
                background-image: url(${d4});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                position: relative;
              `}
            >
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
                ${marginH10}
              `}
            >
              <div
                className={css`
                  flex: 1;
                `}
              >
                <h1 className={h1Style(isDesktop)}>Datz Museum of Art</h1>
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
                <p className={pStyle}>
                  Datz Museum of Art is a meeting place of nature’s beauty and
                  art. Set conveniently away from the busy city.
                  {"\n"}
                  {"\n"}
                  DMA welcomes you to retreat and find inspiration with a
                  community of artist. {"\n"}
                  Come share your creativity and expressions in a uniquely
                  organic and natural environment.
                  {"\n"}
                  {"\n"}
                  DMA opened in October of 2010 in Jinsaegol, Gwangju,
                  Gyeonggi-do, with a mission to help rejuvenate artistically
                  creative spirits. It presents an organic space in nature where
                  one can spend self-reflective time away from the busy city. It
                  is our hope that those who visit will encounter true beauty
                  and reclaim their personal imaginations, sensibilities, and
                  perspectives to breathe anew fresh life into their daily
                  lives. DMA wishes for a community in which life is shared
                  through art.
                </p>
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
                <p
                  className={css`
                    ${pStyle}
                    margin-top: 18px;
                    text-align: center;
                    white-space: break-spaces;
                    margin-bottom: 42px;
                  `}
                >
                  <div>Phone</div>
                  <div>+82 2 447 2581</div>
                  <div>-</div>
                  <div>Email</div>
                  <Grid container spacing={3} justify="center">
                    <Grid item>D’Ark Room</Grid>
                    <Grid item>
                      <a href="mailto:darkroom@datzpress.com">
                        darkroom@datzpress.com
                      </a>
                    </Grid>
                  </Grid>
                </p>
                <BtnBack dark full borderTop />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
