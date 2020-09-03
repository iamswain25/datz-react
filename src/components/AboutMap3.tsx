import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
// import { useGlobalState, LANG } from "../store/useGlobalState";
import {
  bottomBtn37,
  paddingH37,
  paddingH17,
  paddingH10,
  marginH55,
  marginH27,
} from "./styles";

import GoogleMapReact from "google-map-react";
import { Grid } from "@material-ui/core";
const sectionStyle = (isDesktop: boolean) => css`
  position: relative;
  margin-top: ${isDesktop ? 41 : 19}px;
  ${isDesktop ? paddingH37 : paddingH17}
  color: #ffffff;
`;
const h1Style = css`
  margin-top: 33px;
  margin-bottom: 60px;
  font-size: 23px;
  line-height: 1.17;
  padding-bottom: 6px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;
const h2Style = css`
  font-size: 17px;
  line-height: 1.24;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 46px;
`;
const pStyle = css`
  font-family: BauerGroteskOTW03-Regular;
  font-size: 18px;
  line-height: 1.39;
  text-align: center;
  color: #ffffff;
`;
const topStyle = (isDesktop: boolean) => css`
  ${bottomBtn37}
  ${isDesktop ? marginH55 : marginH27}
  width: calc(100% - ${isDesktop
    ? 110
    : 54}px);
  color: #ffffff;
  margin-top: 27px;
  border-top: solid 1px #ffffff;
`;
const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
export default function AboutMap3() {
  const isDesktop = useDesktop();
  // const [lang] = useGlobalState(LANG);
  return (
    <>
      <section className={sectionStyle(isDesktop)}>
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
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={paddingH10}>
              <div>
                <h1 className={h1Style}>Visit Us</h1>
                <h2 className={h2Style}>Working Hour</h2>
                <p className={pStyle}>
                  Datz Press/D’ark Room
                  <br />
                  Open Mon - Fri
                  <br />
                  From 10 am to 6pm.
                  <br />
                </p>
                <h2 className={h2Style}>Address</h2>
                <p className={pStyle}>
                  Datz Press
                  <br />
                  Achasan-ro 471, CS Plaza #B102
                  <br />
                  Gwangjin-gu, Seoul
                  <br />
                  South Korea, 05035
                  <br />
                </p>
              </div>
              <div>
                <h2
                  className={css`
                    ${h2Style}
                    padding-bottom: 6px;
                    border-bottom: 1px solid #ffffff;
                  `}
                >
                  Getting here
                </h2>
                <p
                  className={css`
                    ${pStyle}
                    margin-top: 18px;
                    text-align: left;
                  `}
                >
                  Find us at Achasan-ro 471, CS Plaza #B102, Gwangjin-gu, Seoul,
                  South Korea, 05035. Underground parking is available on-site.
                  Enter CS Plaza building at Achasan ro. Metro lines is Green
                  line No. 2, Gangbyeon Station.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <button
        onClick={(e) =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={topStyle(isDesktop)}
      >
        Top {">"}
      </button>
    </>
  );
}
