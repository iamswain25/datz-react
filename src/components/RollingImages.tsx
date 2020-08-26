import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default function RollingImages(props: {
  images: Array<any> | undefined;
  className?: string;
  additionalClass?: string;
  children?: React.ReactNode;
}) {
  const images =
    (props.images && props.images.map((a) => ({ original: a }))) || [];
  return (
    <div
      className={props.className}
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
        additionalClass={props.additionalClass}
      />
      {props.children}
    </div>
  );
}
