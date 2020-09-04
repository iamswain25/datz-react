import React from "react";
import banner from "../assets/images/event/banner.png";
import pside1 from "../assets/images/legacy/pside1.png";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ImageGalleryGeneric from "./ImageGalleryGeneric";
import { marginH17 } from "./styles";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 79px;
  height: calc(100vh - 79px - 37px);
  min-width: 386px;
  margin-right: 22px;
  .image-gallery .image-gallery-bullets .image-gallery-bullet.active {
    background-color: #cccccc;
  }
  .image-gallery .image-gallery-bullets-container .image-gallery-bullet {
    border: 1px solid #cccccc;
    box-shadow: none;
  }
`;
const mobileContainer = css`
  height: 181px;
  position: relative;
  ${marginH17}
`;
const images = [
  {
    image: banner,
    type: "Upcoming Event",
    title: "LA Art Book Fair",
    subtitle: "2020.4",
    color: "#fff",
    isShowing: true,
    id: "",
  },
  {
    image: pside1,
    type: "Upcoming Event",
    title: "LA Art Book Fair",
    subtitle: "2020.4",
    color: "green",
    isShowing: true,
    id: "",
  },
];
export default function EventStickyLeftGallery() {
  const isDesktop = useDesktop();
  return (
    <>
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <ImageGalleryGeneric items={images} />
      </div>
      {!isDesktop && (
        <hr
          className={css`
            border: none;
            border-bottom: solid 1px #afafaf;
            margin-left: 47px;
            margin-right: 47px;
            margin-top: 28px;
            margin-bottom: 28px;
          `}
        />
      )}
    </>
  );
}
