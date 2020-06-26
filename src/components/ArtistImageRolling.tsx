import React from "react";
import ImageGallery from "react-image-gallery";
import m1 from "../assets/images/artist/m1.png";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Arrow from "./Arrow";
const images = [m1, m1, m1, m1, m1, m1];
export default function ArtistImageRolling() {
  const isDesktop = useDesktop();
  console.log(isDesktop);
  return (
    <>
      <div
        className={css`
          padding-bottom: 70px;
        `}
      >
        <ImageGallery
          infinite={false}
          items={images.map((i) => ({ original: i }))}
          showNav={true}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={false}
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
      </div>
    </>
  );
}
