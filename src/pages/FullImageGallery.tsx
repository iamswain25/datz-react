import React from "react";
import { css } from "emotion";
import ImageGallery from "react-image-gallery";
import Arrow from "../components/Arrow";
import { useHistory } from "react-router-dom";
import useParams from "../components/useParams";
import useDoc from "../utils/useDoc";
import useStorages from "../components/useStorages";
export default function FullImageGallery({
  type = "publication",
}: {
  type: "publication" | "artist" | "event" | "exhibition" | "news";
}) {
  const { index } = useParams();
  const { replace } = useHistory();
  const item = useDoc(type);
  const nullImages = useStorages(item?.images);
  const images = nullImages?.map((a) => ({ original: a })) || [];
  function onSlideHandler(currentIndex: number) {
    replace(`/${type}/${item?.id}/images/${currentIndex}`);
  }
  return (
    <section
      className={css`
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 2;
        top: 0;
        left: 0;
        padding: 38px;
        box-sizing: border-box;
        .image-gallery-slide.center {
          z-index: 9;
        }
      `}
    >
      <ImageGallery
        infinite={false}
        startIndex={Number(index)}
        items={images}
        showNav={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={false}
        autoPlay={false}
        onSlide={onSlideHandler}
        additionalClass="contain-image"
        onClick={() =>
          replace({
            pathname: `/${type}/${item?.id}`,
            state: { index: Number(index) },
          })
        }
        renderLeftNav={function (onClick, disabled) {
          return (
            <Arrow
              children={"←"}
              onClick={onClick}
              className={css`
                left: -34px;
                padding: 50px 10px;
                top: 50%;
                transform: translateY(-50%);
              `}
            />
          );
        }}
        renderRightNav={function (onClick, disabled) {
          return (
            <Arrow
              children={"→"}
              onClick={onClick}
              className={css`
                right: -34px;
                padding: 50px 10px;
                top: 50%;
                transform: translateY(-50%);
              `}
            />
          );
        }}
      />
    </section>
  );
}
