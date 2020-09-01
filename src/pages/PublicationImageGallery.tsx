import React from "react";
import { css } from "emotion";
import ImageGallery from "react-image-gallery";
import Arrow from "../components/Arrow";
import { useParams, useHistory } from "react-router-dom";
import usePublicationIndex from "../utils/usePublicationIndex";
import { makeUrl } from "../config/url";
export default function PublicationImageGallery() {
  const { index, id } = useParams();
  const item = usePublicationIndex(id);
  const { push, replace } = useHistory();
  function onSlideHandler(currentIndex: number) {
    replace(`/publication/${id}/images/${currentIndex}`);
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
        background-color: white;
        box-sizing: border-box;
      `}
    >
      <ImageGallery
        infinite={false}
        startIndex={Number(index)}
        items={item.images.map((i) => ({
          original: makeUrl(i),
        }))}
        showNav={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={false}
        autoPlay={false}
        onSlide={onSlideHandler}
        additionalClass="contain-image"
        onClick={() => push(`/publication/${id}`)}
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
