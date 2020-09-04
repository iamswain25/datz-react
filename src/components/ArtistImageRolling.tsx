import React from "react";
import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import Arrow from "./Arrow";
import { makeUrl } from "../config/url";
import { useHistory, useParams } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
function renderFullscreenButton(onClick: any, isFullscreen: boolean) {
  return (
    <button
      type="button"
      className={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      `}
      onClick={onClick}
    />
  );
}
export default function ArtistImageRolling({ images }: { images: string[] }) {
  const history = useHistory();
  const { address } = useParams();
  const ref = React.useRef<ReactImageGallery>(null);
  return (
    <ImageGallery
      ref={ref}
      infinite={false}
      items={images.map((i) => ({ original: makeUrl(i) }))}
      showNav={true}
      onClick={() =>
        history.replace(
          `/artist/${address}/images/${ref.current?.getCurrentIndex()}`
        )
      }
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={false}
      additionalClass="contain-image"
      autoPlay={false}
      renderLeftNav={function (onClick, disabled) {
        return (
          <Arrow
            children={"←"}
            onClick={onClick}
            className={css`
              color: #ffffff;
              bottom: -40px;
              left: 20px;
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
              color: #ffffff;
              bottom: -40px;
              left: 60px;
            `}
          />
        );
      }}
      renderFullscreenButton={renderFullscreenButton}
    />
  );
}
