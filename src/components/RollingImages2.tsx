import React from "react";

import ImageGallery from "react-image-gallery";
import { makeUrl } from "../config/url";
export default function RollingImages2(props: {
  items: Array<any>;
  className?: string;
  additionalClass?: string;
  children?: React.ReactNode;
}) {
  const images = props.items.map((a) => ({ original: makeUrl(a) }));
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
