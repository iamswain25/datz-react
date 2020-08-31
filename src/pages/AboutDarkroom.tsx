import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import d3 from "../assets/images/about/d3.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  marginH10,
  flexcolumn,
  paddingH17,
} from "../components/styles";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import Darkroom from "../assets/svg/Darkroom";
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
const h2Style = css`
  font-size: 20px;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 25px;
  margin-bottom: 8px;
  margin-top: 34px;
  text-align: left;
`;
const pStyle = css`
  font-size: 18px;
  line-height: 1.39;
  text-align: left;
`;
export default function AboutDatzpress() {
  const isDesktop = useDesktop();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  function onLeft() {
    history.push("/about/datzpress");
  }
  function onRight() {
    history.push("/about/datzmuseum");
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
                background-image: url(${d3});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                position: relative;
              `}
            >
              <Darkroom
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
                <h1 className={h1Style(isDesktop)}>D’Ark Room</h1>

                <p className={pStyle}>
                  D’ark Room is a project space for showcasing photographs and
                  books. We hosts lectures, artist talks, and portfolio reviews
                  in collaboration with various artist. Archive Room has over
                  1,000 photo books and offers a reading room for artists
                  documentaries and DVDs.
                </p>
                <h2 className={h2Style}>D’Front Space</h2>
                <p className={pStyle}>
                  D’Front Space is a gallery space that naturally connects to
                  D’Ark Room and invites and welcomes the outside gaze. It
                  displays various projects underway at D’ARK ROOM, and is a
                  12.65 m² area featuring a show window exposed outside.
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
