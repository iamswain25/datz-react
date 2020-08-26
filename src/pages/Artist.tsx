import React from "react";
import RollingImages from "../components/RollingImages";
import a1 from "../assets/images/artist/artist1.png";
import a2 from "../assets/images/artist/artist2.png";
import e1 from "../assets/images/artist/exhi1.png";
import ai1 from "../assets/images/artist/ai1.png";
import ai2 from "../assets/images/artist/ai2.png";
import ai3 from "../assets/images/artist/ai3.png";
import Header from "../components/Header";
import { css } from "emotion";
import { Divider } from "@material-ui/core";
import { marginH55, marginH37 } from "../components/styles";
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
export default function Artist() {
  return (
    <>
      <Header fixed color="white" />
      <RollingImages
        images={[a1, a1, a1]}
        additionalClass="white-bullets"
        className={css`
          height: 100vh;
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
          ${marginH37} display:flex;
        `}
      >
        <RollingImages
          images={[a2, a1, a1]}
          className={css`
            height: 100vh;
            width: calc(50% - 23px);
            margin-right: 23px;
          `}
        />
        <div
          className={css`
            flex: 1;
            margin-left: 23px;
          `}
        >
          <BookProject />
        </div>
      </div>
      <DatzArtistProject2 />
      <RollingImages
        images={[e1, e1, e1]}
        additionalClass="white-bullets"
        className={css`
          height: 100vh;
          ${marginH37}
        `}
        children={<DatzArtistExhibition />}
      />
      <RollingImages
        images={[ai1, ai2, ai3]}
        additionalClass="white-bullets"
        className={css`
          height: 100vh;
          margin-top: 21px;
          ${marginH37}
        `}
        children={<DatzArtistExhibition2 />}
      />
      <RollingImages
        images={[ai2, ai3, ai1]}
        additionalClass="white-bullets"
        className={css`
          height: 100vh;
          margin-top: 21px;
          ${marginH37}
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
          ${marginH37} display:flex;
        `}
      >
        <RollingImages
          images={[ai3, ai1, ai2]}
          children={<DatzArtistExhibition4 />}
          className={css`
            height: 100vh;
            width: calc(50% - 23px);
            margin-right: 23px;
          `}
        />
        <div
          className={css`
            flex: 1;
            margin-left: 23px;
          `}
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
