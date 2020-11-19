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
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import useIsTop from "../components/useIsTop";
import useCollection from "../utils/useCollection";
import BtnTop from "../components/BtnTop";
export default function ArtistProject() {
  const isDesktop = useDesktop(true);
  const isTop = useIsTop();
  const collection = useCollection("artist-project");
  const items = React.useMemo(() => {
    const c = collection || [];
    const top = c.filter((d) => d.type === "top");
    const [book] = c.filter((d) => d.type === "book");
    const projects = c.filter((d) => d.type === "projects");
    const exhibition = c.length
      ? [
          c.find((d) => d.type === "exhibition"),
          c.find((d) => d.type === "museum"),
          c.find((d) => d.type === "darkroom"),
        ]
      : [];
    const residency = c.filter((d) => d.type === "residency");
    const facilities = c.filter((d) => d.type === "facilities");
    return { top, book, projects, exhibition, residency, facilities };
  }, [collection]);
  const { top, book, projects, exhibition, residency, facilities } = items;
  return (
    <>
      <Header
        fixed={isDesktop}
        sticky={!isDesktop}
        // darkerLogo
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
        items={top}
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
          items={book?.image}
          children={
            isDesktop ? undefined : (
              <div
                className={css`
                  margin-top: 21px;
                  width: 100%;
                  position: absolute;
                  font-family: datz-medium;
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
                  min-height: calc(100vh - 37px - 79px);
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
          <BookProject item={book} />
        </div>
      </div>
      <DatzArtistProject2 items={projects} />
      {exhibition.length &&
        exhibition.map((item, key) => {
          item.key = key;
          return (
            <RollingImages2
              key={key}
              items={item.image}
              additionalClass="white-bullets"
              className={css`
                margin-top: 21px;
                ${isDesktop ? marginH37 : undefined}
                height: ${isDesktop ? "calc(100vh - 21px - 79px)" : "588px"};
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
          display: flex;
          flex-direction: ${isDesktop ? "row" : "column"};
          ${isDesktop ? marginH37 : marginH17}
        `}
      >
        <RollingImages
          items={residency}
          children={() => <ResidencyLeft />}
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                  min-height: calc(100vh - 37px - 79px);
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
          <ResidencyRight item={residency[0]} />
        </div>
      </div>
      <Facilities items={facilities} />
      <div
        className={css`
          margin-top: ${isDesktop ? 30 : 0}px;
          display: flex;
          justify-content: center;
        `}
      >
        <BtnTop full />
      </div>
    </>
  );
}
