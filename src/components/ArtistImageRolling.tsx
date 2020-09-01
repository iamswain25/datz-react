import React from "react";
import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import Arrow from "./Arrow";
import { makeUrl } from "../config/url";
export default function ArtistImageRolling({ images }: { images: string[] }) {
  return (
    <ImageGallery
      infinite={false}
      items={images.map((i) => ({ original: makeUrl(i) }))}
      showNav={true}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={false}
      additionalClass="contain-image"
      autoPlay={false}
      renderLeftNav={function (onClick, disabled) {
        return (
          <Arrow
            children={"←"}
            onClick={onClick}
            className={css`
              color: #ffffff;
              bottom: -40px;
              left: 20px;
            `}
          />
        );
      }}
      renderRightNav={function (onClick, disabled) {
        return (
          <Arrow
            children={"→"}
            onClick={onClick}
            className={css`
              color: #ffffff;
              bottom: -40px;
              left: 60px;
            `}
          />
        );
      }}
    />
  );
}
