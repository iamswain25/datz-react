import React from "react";
import RollingImages from "../components/RollingImages";
import RollingImages2 from "../components/RollingImages2";
import { css } from "emotion";
import { Divider } from "@material-ui/core";
import { marginH55, marginH37, marginH17 } from "../components/styles";
import BookProject from "../components/BookProject";
import DatzArtistProject from "../components/DatzArtistProject";
import DatzArtistExhibition from "../components/DatzArtistExhibition";
import DatzArtistProject2 from "../components/DatzArtistProject2";
import ResidencyRight from "../components/ResidencyRight";
import Facilities from "../components/Facilities";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import useIsTop from "../components/useIsTop";
import useCollection from "../utils/useCollection";
import BtnTop from "../components/BtnTop";
import { DEFAULT_LAZY_IMAGE_COLOR } from "../config/params";
import ArtistProjectVideo from "../components/ArtistProjectVideo";
import useNavTopHeight from "../components/useNavTopHeight";
export default function ArtistProject() {
  const isDesktop = useDesktop(true);
  const isTop = useIsTop();
  const collection = useCollection("artist-project");
  const { navTopHeight } = useNavTopHeight();
  const desktopHeight = `calc(100vh - 21px - ${navTopHeight})`;
  const items = React.useMemo(() => {
    const c = collection || [];
    const top = c.filter((d) => d.type === "top");
    const [book] = c.filter((d) => d.type === "book");
    const projects = c.filter((d) => d.type === "projects");
    const exhibition = c.filter((d) => d.type === "exhibition");
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
      {isDesktop ? (
        <ArtistProjectVideo top={top} />
      ) : (
        <RollingImages
          items={top}
          additionalClass="white-bullets"
          className={css`
            height: ${isDesktop ? "100vh" : "527px"};
            background-color: ${DEFAULT_LAZY_IMAGE_COLOR};
          `}
          children={(props) => <DatzArtistProject {...props} />}
        />
      )}

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
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                  min-height: calc(100vh - 37px - ${navTopHeight});
                `
              : css`
                  height: 527px;
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
              : css`
                  margin: 0 11px;
                `
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
              key={item.image + key}
              items={item.image}
              additionalClass="white-bullets"
              className={css`
                margin-top: 21px;
                ${isDesktop ? marginH37 : undefined}
                height: ${isDesktop ? desktopHeight : "527px"};
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
          className={
            isDesktop
              ? css`
                  width: calc(50% - 23px);
                  margin-right: 23px;
                  min-height: calc(100vh - 37px - ${navTopHeight});
                  pointer-events: none;
                `
              : css`
                  height: 527px;
                  pointer-events: none;
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
              : css`
                  margin: 0 11px;
                `
          }
        >
          <ResidencyRight item={residency[0]} />
        </div>
      </div>
      <Facilities items={facilities} />
      <div
        className={css`
          // margin-top: ${isDesktop ? 30 : 0}px;
          display: flex;
          justify-content: center;
        `}
      >
        <BtnTop full />
      </div>
    </>
  );
}
