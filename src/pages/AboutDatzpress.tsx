import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import BtnBack from "../components/BtnBack";
import d2 from "../assets/images/about/d2.png";
import m2 from "../assets/images/about/m2.png";
import ArtistHeader from "../components/ArtistHeader";
import {
  paddingH37,
  flexcolumnstretch,
  marginH10,
  flexcolumn,
  paddingH17,
} from "../components/styles";
import Datzpress from "../assets/svg/Datzpress";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
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
                background-image: url(${isDesktop ? d2 : m2});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                position: relative;
              `}
            >
              <Datzpress
                color="#afafaf"
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
                <h1 className={h1Style(isDesktop)}>Datz Press</h1>

                <p className={pStyle}>
                  Datz Press is an art book press that works with photographers,
                  designers, and bookmakers. We create, publish, and exhibit
                  books centered on photography. We advocates for the growth of
                  participatory artistic activity through exhibiting and
                  publishing art, as well as art education.
                </p>
                <h2 className={h2Style}>Datz Books</h2>
                <p className={pStyle}>
                  Datz Books is a bookmaking studio. We collaborate with artists
                  who want to create artist books. We suggest appropriate
                  designs, materials, and binding procedures and complete a
                  book. We assure an excellent book through a direct management
                  of the whole delicate process handcrafted to perfection.
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
                    <Grid item>Enquiry</Grid>
                    <Grid item>
                      <a href="mailto:datzpress@datzpress.com">
                        datzpress@datzpress.com
                      </a>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} justify="center">
                    <Grid item>D’Ark Room</Grid>
                    <Grid item>
                      <a href="mailto:books@datzpress.com">
                        books@datzpress.com
                      </a>
                    </Grid>
                  </Grid>
                </div>
                <BtnBack dark full borderTop />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
