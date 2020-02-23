import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default (props: React.PropsWithoutRef<{ images: Array<any> }>) => {
  const images = props.images.map(a => ({ original: a.image }));
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
          padding: 37
        }}
      >
        <div>New Books</div>
        <hr style={{ borderWidth: 1, borderColor: "black", width: 400 }} />
        <div>Nothing Will Ever be the Same Again</div>
        <div>Amanda Marchand</div>
      </div>
    </div>
  );
};
