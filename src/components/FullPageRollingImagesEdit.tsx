import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import FullPageRollingImagesEditText from "./FullPageRollingImagesEditText";
import { Main } from "../@type/main";
export default (props: React.PropsWithoutRef<{ images: Array<Main> }>) => {
  const images = props.images.map(a => ({ original: a.image }));
  const [index, setIndex] = React.useState(0);
  function onslideHandler(index: number) {
    setIndex(index);
  }
  const [isNew, setNew] = React.useState(false);
  function saveHandler(){
    
  }
  return (
    <div
      style={{
        height: "calc(100vh - 79px)",
        overflow: "hidden",
        padding: 37,
        position: "relative"
      }}
    >
      {!isNew && (
        <>
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
            onSlide={onslideHandler}
          />
          <input type="button" value="new" onClick={e => setNew(true)} />
        </>
      )}
      <input type="button" value="save" onClick={saveHandler} />
      <FullPageRollingImagesEditText data={props.images[index]} />
    </div>
  );
};
