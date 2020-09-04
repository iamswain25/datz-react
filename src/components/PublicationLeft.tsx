import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ImageGalleryGeneric from "./ImageGalleryGeneric";
import useBanners from "../utils/useBanners";
const stickyContainer = css`
  align-self: flex-start;
  position: sticky;
  top: 79px;
  height: calc(100vh - 79px - 37px);
  width: 384px;
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
`;
export default function PublicationLeft() {
  const isDesktop = useDesktop();
  const items = useBanners("leftSide", "Upcoming Book");
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <ImageGalleryGeneric items={items} />
    </div>
  );
}
