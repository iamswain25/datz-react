import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ImageGalleryGeneric from "./ImageGalleryGeneric";
import { marginH17 } from "./styles";
import useCollectionWhere from "../utils/useCollectionWhere";
const stickyContainer = css`
  align-self: flex-start;
  position: fixed;
  top: 79px;
  height: calc(100vh - 79px - 37px);
  min-width: 384px;
  width: 384px;
  margin-right: 27px;
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
export default function ExhibitionLeft() {
  const isDesktop = useDesktop();
  const items = useCollectionWhere("banner", "exhibition");
  return (
    <>
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <ImageGalleryGeneric items={items} />
      </div>
      <div
        className={css`
          min-width: 384px;
          width: 384px;
          margin-right: 27px;
        `}
      />
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
