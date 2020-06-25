import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Main, newMain } from "../@type/main";
import { css } from "emotion";
import DatzMuseum from "../assets/svg/DatzMuseum";
import useDesktop from "./useDesktop";
export default (props: { images: Array<Main> | undefined }) => {
  const images =
    (props.images && props.images.map((a) => ({ original: a.image }))) || [];
  const [index, setIndex] = React.useState(0);
  function onslideHandler(index: number) {
    setIndex(index);
  }
  const isDesktop = useDesktop();
  const { type, title, author, color } =
    (props.images && props.images[index]) || newMain;
  const typeClass = css`
    font-family: BauerGroteskOTW03;
    font-size: ${isDesktop ? 19 : 16}px;
    line-height: ${isDesktop ? 1.21 : 1.19};
    text-align: center;
    margin-top: ${isDesktop ? 0 : 5}px;
  `;
  const titleClass = css`
    font-family: ArnoPro-Subhead;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    text-align: center;
  `;
  const authorClass = css`
    font-family: ArnoPro-Display;
    font-size: ${isDesktop ? 21 : 20}px;
    line-height: ${isDesktop ? 1.38 : 1.4};
    letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
    text-align: center;
    margin-top: ${isDesktop ? 4 : 3}px;
  `;
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        paddingTop: 28,
        paddingBottom: 28,
        position: "relative",
      }}
    >
      <ImageGallery
        infinite={true}
        items={images}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={true}
        onSlide={onslideHandler}
        slideInterval={5000}
      />
      <div
        className={css`
          width: 100%;
          height: calc(100vh - 56px);
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 28px;
          margin-bottom: 28px;
          padding-top: 37px;
          color: ${color ?? "#ffffff"};
        `}
      >
        <div className={typeClass}>{type}</div>
        <hr
          className={css`
            border-top: 1px solid ${color};
            width: ${isDesktop ? "555px" : "calc(100% - 40px)"};
            margin-top: ${isDesktop ? 8 : 3}px;
            margin-bottom: ${isDesktop ? 18 : 16}px;
          `}
        />
        <div className={titleClass}>{title}</div>
        <div className={authorClass}>{author}</div>
        <DatzMuseum
          className={css`
            height: 30px;
            left: ${isDesktop ? 69 : 40}px;
            bottom: ${isDesktop ? 33 : 29}px;
            position: absolute;
          `}
        />
      </div>
    </div>
  );
};
