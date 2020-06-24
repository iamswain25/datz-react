import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Main, newMain } from "../@type/main";
import { css } from "emotion";
import DatzMuseum from "../assets/svg/DatzMuseum";
const typeClass = css`
  font-family: BauerGroteskOTW03;
  font-size: 19px;
  line-height: 1.21;
  text-align: center;
`;
const titleClass = css`
  font-family: ArnoPro-Subhead;
  font-size: 27px;
  line-height: 1.37;
  letter-spacing: 0.54px;
  text-align: center;
`;
const authorClass = css`
  margin-top: 4px;
  font-family: ArnoPro-Display;
  font-size: 21px;
  line-height: 1.38;
  letter-spacing: 0.42px;
  text-align: center;
`;
export default (props: { images: Array<Main> | undefined }) => {
  const images =
    (props.images && props.images.map((a) => ({ original: a.image }))) || [];
  const [index, setIndex] = React.useState(0);
  function onslideHandler(index: number) {
    setIndex(index);
  }
  const { type, title, author, color } =
    (props.images && props.images[index]) || newMain;
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
        autoPlay={false}
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
            width: 555px;
            margin-top: 8px;
            margin-bottom: 18px;
          `}
        />
        <div className={titleClass}>{title}</div>
        <div className={authorClass}>{author}</div>
        <DatzMuseum
          className={css`
            height: 30px;
            bottom: 0;
            left: 0;
            position: absolute;
            padding: 70px;
            padding-bottom: 35px;
          `}
        />
      </div>
    </div>
  );
};
