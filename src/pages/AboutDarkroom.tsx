import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import d3 from "../assets/images/about/d3.png";
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
const h1Style = (isDesktop = false) => css`
  margin-top: ${isDesktop ? 35 : 14}px;
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;
export default function AboutDatzpress() {
  const isDesktop = useDesktop();
  const [classes] = useLang("About");
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
      <ArtistHeader sticky />
      <div
        className={css`
          ${isDesktop ? paddingH37 : paddingH17}
          ${flexcolumn}
          position: relative;
          min-height: ${isDesktop ? "calc(100vh - 79px)" : "auto"};
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
                link={d3}
                img={css`
                  width: 100%;
                  height: inherit;
                  object-fit: cover;
                `}
              />
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
                <h1 className={h1Style(isDesktop)}>D’Ark Room</h1>

                <p className={classes.desc}>
                  D’ark Room is a project space for showcasing photographs and
                  books. We hosts lectures, artist talks, and portfolio reviews
                  in collaboration with various artist. Archive Room has over
                  1,000 photo books and offers a reading room for artists
                  documentaries and DVDs.
                </p>
                <h2 className={classes.title}>D’Front Space</h2>
                <p className={classes.desc}>
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
                <div
                  className={css`
                    ${classes.desc}
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
