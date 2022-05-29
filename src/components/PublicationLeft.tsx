import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ImageGalleryGeneric from "./ImageGalleryGeneric";
import useCollectionWherePublic from "../utils/useCollectionWherePublic";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  height: 181px;
  position: relative;
`;
export default function PublicationLeft() {
  const isDesktop = useDesktop();
  const items = useCollectionWherePublic("banner", "publication");
  const { navTopHeight, desktopHeight37 } = useNavTopHeight();
  const stickyContainer = css`
    align-self: flex-start;
    position: fixed;
    top: ${navTopHeight}px;
    height: ${desktopHeight37};
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
  return (
    <>
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <ImageGalleryGeneric items={items} />
      </div>
      <div
        className={css`
          width: 384px;
          margin-right: 22px;
        `}
      />
    </>
  );
}
