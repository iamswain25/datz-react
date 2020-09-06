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
import useBanners from "../utils/useBanners";
import useLang from "./useLang";
const sectionStyle = (isDesktop: boolean) => css`
  position: relative;
  margin-top: ${isDesktop ? 41 : 19}px;
  ${isDesktop ? paddingH37 : paddingH17}
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
  const visits = useBanners("about", "Visit");
  const [classes] = useLang("body");
  const [gettinghere] = useBanners("about", "Getting here");
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
                <h1
                  className={css`
                    margin-top: 33px;
                    margin-bottom: 60px;
                    ${classes.book(23, 1.17)}
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
              <div>
                <h2
                  className={css`
                    ${classes.book(17, 1.24)}
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
