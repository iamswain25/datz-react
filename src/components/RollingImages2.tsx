import React from "react";
import ImageGallery from "react-image-gallery";
import ReactImageGalleryRenderItem from "./ReactImageGalleryRenderItem";
import useStorages from "./useStorages";
export default function RollingImages2(props: {
  items: Array<any>;
  className?: string;
  additionalClass?: string;
  children?: React.ReactNode;
}) {
  const nullImages = useStorages(props.items);
  const images = nullImages?.map((a) => ({ original: a })) || [];
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
        renderItem={ReactImageGalleryRenderItem}
      />
      {props.children}
    </div>
  );
}
