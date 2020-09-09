import React from "react";
import RollingImages from "../components/RollingImages";
import RollingImages2 from "../components/RollingImages2";
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
import ResidencyRight from "../components/ResidencyRight";
import ResidencyLeft from "../components/ResidencyLeft";
import Facilities from "../components/Facilities";
import BtnBack from "../components/BtnBack";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useBanners from "../utils/useBanners";
import useIsTop from "../components/useIsTop";
export default function ArtistProject() {
  const isDesktop = useDesktop(true);
  const items1 = useBanners("artists", "Datz Aritst Projects");
  const [BookProjectMain] = useBanners("artists", "BookProjectMain");
  const items2 = useBanners("artists", "Exhibition");
  const ResidencyMain = useBanners("artists", "ResidencyMain");
  const isTop = useIsTop();
  return (
    <>
      <Header
        fixed
        darkerLogo
        backgroundColor={
          !isDesktop
            ? undefined
            : isTop
            ? "transparent"
            : "rgba(255,255,255,0.8)"
        }
        color={!isDesktop ? undefined : isTop ? "white" : "#707070"}
      />
      <RollingImages
        items={items1}
        additionalClass="white-bullets"
        className={css`
          height: ${isDesktop ? "100vh" : "588px"};
          background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
        `}
        children={(props) => <DatzArtistProject {...props} />}
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
        <RollingImages2
          items={BookProjectMain.image}
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
                Residency
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
                  min-height: 100vh;
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
          <BookProject item={BookProjectMain} />
        </div>
      </div>
      <DatzArtistProject2 />
      {items2.map((item, key) => {
        item.key = key;
        return (
          <RollingImages2
            key={key}
            items={item.image}
            additionalClass="white-bullets"
            className={css`
              margin-top: 21px;
              ${isDesktop ? marginH37 : undefined}
              height: ${isDesktop ? "auto" : "588px"};
              max-height: 100vh;
            `}
            children={<DatzArtistExhibition item={item} />}
          />
        );
      })}

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
          items={ResidencyMain}
          children={() => <ResidencyLeft />}
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                  min-height: 100vh;
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
          <ResidencyRight item={ResidencyMain[0]} />
        </div>
      </div>
      <Facilities />
      <div
        className={css`
          margin-top: ${isDesktop ? 70 : 0}px;
          display: flex;
          justify-content: center;
        `}
      >
        <BtnBack />
      </div>
    </>
  );
}
