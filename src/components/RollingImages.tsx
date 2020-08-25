import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default function RollingImages(props: {
  images: Array<any> | undefined;
}) {
  const images =
    (props.images && props.images.map((a) => ({ original: a }))) || [];
  return (
    <div
      style={{
        overflow: "hidden",
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
        slideInterval={5000}
      />
    </div>
  );
}
