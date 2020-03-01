import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Main, newMain } from "../@type/main";
export default (props: { images: Array<Main> | undefined }) => {
  const images =
    (props.images && props.images.map(a => ({ original: a.image }))) || [];
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
        padding: 37,
        position: "relative"
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
          color
        }}
      >
        <div>{type}</div>
        <hr style={{ borderWidth: 1, borderColor: color, width: 400 }} />
        <div>{title}</div>
        <div>{author}</div>
      </div>
    </div>
  );
};
