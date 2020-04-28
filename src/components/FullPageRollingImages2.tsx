import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Main, newMain } from "../@type/main";
import { css } from "emotion";
import datzpressLogo from "../assets/images/datzpress.svg";
const typeClass = css`
  font-family: BauerGroteskOTW03;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  margin-top: 37px;
`;
const titleClass = css`
  font-family: ArnoPro-Subhead;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 0.44px;
  text-align: center;
`;
const authorClass = css`
  font-family: ArnoPro-Display;
  font-size: 27px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: 0.54px;
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
        height: "calc(100vh - 79px)",
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
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 37,
          color,
        }}
      >
        <div className={typeClass}>{type}</div>
        <hr style={{ borderWidth: 1, borderColor: color, width: 400 }} />
        <div className={titleClass}>{title}</div>
        <div className={authorClass}>{author}</div>
        <img
          src={datzpressLogo}
          alt="logo"
          className={css`
            height: 30px;
            bottom: 0;
            left: 0;
            position: absolute;
            padding: 70px;
          `}
        />
      </div>
    </div>
  );
};
