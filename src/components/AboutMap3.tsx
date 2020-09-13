import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import {
  paddingH37,
  paddingH17,
  marginH55,
  marginH27,
  marginH10,
} from "./styles";
import GoogleMapReact from "google-map-react";
import { Grid } from "@material-ui/core";
import useBanners from "../utils/useBanners";
import useLang from "./useLang";
import BtnTop from "./BtnTop";
import MapMarker from "./MapMarker";
const defaultProps = {
  center: {
    lat: 37.540535,
    lng: 127.0922978,
  },
  zoom: 16,
};
export default function AboutMap3() {
  const isDesktop = useDesktop();
  const visits = useBanners("about", "Visit");
  const [classes] = useLang("body");
  const [gettinghere] = useBanners("about", "Getting here");
  return (
    <>
      <section
        className={css`
          position: relative;
          height: ${isDesktop
            ? "calc(100vh - 79px - 41px - 27px - 37px)"
            : "auto"};
          margin-top: ${isDesktop ? 41 : 19}px;
          ${isDesktop ? paddingH37 : paddingH17}
          color: #ffffff;
          display: flex;
        `}
      >
        <Grid container spacing={isDesktop ? 4 : 0}>
          <Grid
            item
            xs={12}
            sm={6}
            className={css`
              min-height: 588px;
            `}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBLWcym-3i-U68oKTFMpLZEVDed0K9fZuw",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <MapMarker
                {...defaultProps.center}
                className={css`
                  color: red;
                `}
              />
            </GoogleMapReact>
          </Grid>
          <Grid container item xs={12} sm={6} direction="column">
            <div
              className={css`
                flex: 1;
                ${isDesktop ? paddingH17 : marginH10}
              `}
            >
              <h1
                className={css`
                  margin-top: 33px;
                  margin-bottom: 60px;
                  font-size: 23px;
                  text-align: center;
                  line-height: 1.17;
                  padding-bottom: 6px;
                  border-bottom: 1px solid #ffffff;
                `}
              >
                Visit Us
              </h1>
              {visits.map((e, i) => (
                <div key={i}>
                  <h2
                    className={css`
                      ${classes.book(17, 1.24)}
                      margin-bottom: 25px;
                      margin-top: 46px;
                    `}
                  >
                    {e.title}
                  </h2>
                  <p
                    className={css`
                      ${classes.regular(18, 1.39)}
                      text-align: center;
                    `}
                  >
                    {e.text}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                ${isDesktop ? paddingH17 : marginH10}
              `}
            >
              <h2
                className={css`
                  font-size: 17px;
                  line-height: 1.24;
                  text-align: center;
                  margin-bottom: 25px;
                  margin-top: 46px;
                  padding-bottom: 6px;
                  border-bottom: 1px solid #ffffff;
                `}
              >
                Getting here
              </h2>
              <p
                className={css`
                  ${classes.regular(18, 1.39)}
                  margin-top: 18px;
                `}
              >
                {gettinghere.text}
              </p>
            </div>
          </Grid>
        </Grid>
      </section>
      <div
        className={css`
          ${isDesktop ? marginH55 : marginH27}
          color: #ffffff;
          margin-top: 27px;
          border-top: solid 1px #ffffff;
        `}
      >
        <BtnTop full color="#fff" />
      </div>
    </>
  );
}
