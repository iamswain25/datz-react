import React from "react";
import RollingImages from "../components/RollingImages";
import a1 from "../assets/images/artist/artist1.png";
import a2 from "../assets/images/artist/artist2.png";
import e1 from "../assets/images/artist/exhi1.png";
import ai1 from "../assets/images/artist/ai1.png";
import ai2 from "../assets/images/artist/ai2.png";
import ai3 from "../assets/images/artist/ai3.png";
import { css } from "emotion";
import { Divider } from "@material-ui/core";
import {
  marginH55,
  marginH37,
  paddingH20,
  marginH17,
} from "../components/styles";
import BookProject from "../components/BookProject";
import DatzArtistProject from "../components/DatzArtistProject";
import DatzArtistExhibition from "../components/DatzArtistExhibition";
import DatzArtistProject2 from "../components/DatzArtistProject2";
import DatzArtistExhibition2 from "../components/DatzArtistExhibition2";
import DatzArtistExhibition3 from "../components/DatzArtistExhibition3";
import Residence from "../components/Residence";
import DatzArtistExhibition4 from "../components/DatzArtistExhibition4";
import DatzArtistProject3 from "../components/DatzArtistProject3";
import BtnBack from "../components/BtnBack";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
export default function Artist() {
  const isDesktop = useDesktop();
  return (
    <>
      <Header
        change={isDesktop}
        backgroundColor={isDesktop ? "transparent" : undefined}
        color={isDesktop ? "white" : undefined}
      />
      <RollingImages
        images={[a1, a1, a1]}
        additionalClass="white-bullets"
        className={css`
          height: ${isDesktop ? "100vh" : "588px"};
          background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
        `}
        children={<DatzArtistProject />}
      />
      <div
        className={css`
          ${marginH55}
          margin-top: 28px;
          margin-bottom: 28px;
        `}
      >
        <Divider />
      </div>
      <div
        className={css`
          ${isDesktop ? marginH37 : marginH17} display:flex;
          flex-direction: ${isDesktop ? "row" : "column"};
        `}
      >
        <RollingImages
          images={[a2, a1, a1]}
          children={
            isDesktop ? undefined : (
              <div
                className={css`
                  margin-top: 21px;
                  width: 100%;
                  position: absolute;
                  font-family: BauerGroteskOTW03;
                  font-size: 23px;
                  line-height: 1.17;
                  text-align: center;
                  color: #ffffff;
                  top: 0;
                  ${paddingH20}
                `}
              >
                Residence
                <hr
                  className={css`
                    margin-top: 5px;
                    border-top-color: white;
                    border-style: solid;
                  `}
                />
              </div>
            )
          }
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                `
              : css`
                  height: 588px;
                `
          }
        />
        <div
          className={
            isDesktop
              ? css`
                  flex: 1;
                  margin-left: 23px;
                `
              : undefined
          }
        >
          <BookProject />
        </div>
      </div>
      <DatzArtistProject2 />
      <RollingImages
        images={[e1, e1, e1]}
        additionalClass="white-bullets"
        className={css`
          ${isDesktop ? marginH37 : undefined}
          height: ${isDesktop ? "auto" : "588px"};
        `}
        children={<DatzArtistExhibition />}
      />
      <RollingImages
        images={[ai1, ai2, ai3]}
        additionalClass="white-bullets"
        className={css`
          margin-top: 21px;
          ${isDesktop ? marginH37 : undefined}
          height: ${isDesktop ? "auto" : "588px"};
        `}
        children={<DatzArtistExhibition2 />}
      />
      <RollingImages
        images={[ai2, ai3, ai1]}
        additionalClass="white-bullets"
        className={css`
          margin-top: 21px;
          ${isDesktop ? marginH37 : undefined}
          height: ${isDesktop ? "auto" : "588px"};
        `}
        children={<DatzArtistExhibition3 />}
      />
      <div
        className={css`
          ${marginH55}
          margin-top: 28px;
          margin-bottom: 28px;
        `}
      >
        <Divider />
      </div>
      <div
        className={css`
          ${isDesktop ? marginH37 : marginH17} display:flex;
          flex-direction: ${isDesktop ? "row" : "column"};
        `}
      >
        <RollingImages
          images={[ai3, ai1, ai2]}
          children={<DatzArtistExhibition4 />}
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                `
              : css`
                  height: 588px;
                `
          }
        />
        <div
          className={
            isDesktop
              ? css`
                  flex: 1;
                  margin-left: 23px;
                `
              : undefined
          }
        >
          <Residence />
        </div>
      </div>
      <DatzArtistProject3 />
      <div
        className={css`
          margin-top: 70px;
          display: flex;
          justify-content: center;
        `}
      >
        <BtnBack />
      </div>
    </>
  );
}
