import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import AdminMainEdit from "./AdminMainEdit";
import AdminMainNew from "./AdminMainNew";
import { Main, newMain } from "../@type/main";
// import { firestore } from "../firebase";
import Popup from "reactjs-popup";
export default (props: { images: Array<Main>; collection: string }) => {
  const images = props.images.map(a => ({ original: a.image }));
  console.log(images);
  const [index, setIndex] = React.useState(0);
  function onslideHandler(index: number) {
    setIndex(index);
  }

  const [isNew, setNew] = React.useState(false);
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
        showNav={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={false}
        slideInterval={5000}
        onSlide={onslideHandler}
      />
      <AdminMainEdit data={props.images[index]} collection={props.collection} />
      <Popup
        open={isNew}
        modal
        contentStyle={{ width: "100%", padding: 0, margin: 30 }}
      >
        <AdminMainNew
          setNew={setNew}
          data={newMain}
          collection={props.collection}
        />
      </Popup>
      <input
        type="button"
        value="new"
        onClick={_ => setNew(true)}
        style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
      />
    </div>
  );
};