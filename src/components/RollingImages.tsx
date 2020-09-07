import React from "react";

import ImageGallery from "react-image-gallery";
import { makeUrl } from "../config/url";
export default function RollingImages(props: {
  items: Array<any>;
  className?: string;
  additionalClass?: string;
  children?: (props: { item: any }) => React.ReactNode;
}) {
  const [index, setIndex] = React.useState(0);
  const images = props.items.map((a) => ({ original: makeUrl(a.image) }));
  const item = props.items[index];
  function onslideHandler(index: number) {
    setIndex(index);
  }
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
        onSlide={onslideHandler}
      />
      {props.children && props.children({ item })}
    </div>
  );
}
