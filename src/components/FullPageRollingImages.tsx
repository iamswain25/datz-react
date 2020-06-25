import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Main, newMain } from "../@type/main";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Datzpress from "../assets/svg/Datzpress";
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
  font-family: ArnoPro-Display;
  font-size: 21px;
  line-height: 1.38;
  letter-spacing: 0.42px;
  text-align: center;
  margin-top: 4px;
`;
export default (props: {
  images: Array<Main> | undefined;
  style?: React.CSSProperties;
}) => {
  const { style } = props;
  const isDesktop = useDesktop();
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
        paddingBottom: isDesktop ? 37 : 17,
        paddingLeft: isDesktop ? 37 : 17,
        paddingRight: isDesktop ? 37 : 17,
        position: "relative",
        ...style,
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
          padding: isDesktop ? 37 : 20,
          color,
        }}
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
        <Datzpress
          className={css`
            height: 30px;
            bottom: ${isDesktop ? 29 : 25}px;
            left: ${isDesktop ? 32 : 23}px;
            position: absolute;
            padding: ${isDesktop ? 37 : 20}px;
          `}
        />
      </div>
    </div>
  );
};
