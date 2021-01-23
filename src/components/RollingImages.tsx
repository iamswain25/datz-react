import React from "react";
import ImageGallery from "react-image-gallery";
import ReactImageGalleryRenderItem from "./ReactImageGalleryRenderItem";
import useStorages from "./useStorages";
export default function RollingImages({
  className,
  items,
  additionalClass,
  children,
}: {
  items: Array<any>;
  className?: string;
  additionalClass?: string;
  children?: (props: { item: any }) => React.ReactNode;
}) {
  const [item, setItem] = React.useState();
  const imageArr = React.useMemo(() => items.map((a) => a.image), [items]);
  const nullImages = useStorages(imageArr);
  const images = nullImages?.map((a) => ({ original: a })) || [];
  function onslideHandler(index: number) {
    setItem(items[index]);
  }
  return (
    <div
      className={className}
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
        additionalClass={additionalClass}
        onSlide={onslideHandler}
        renderItem={ReactImageGalleryRenderItem}
      />
      {children && children({ item })}
    </div>
  );
}
