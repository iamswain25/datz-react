import React from "react";
import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import Arrow from "./Arrow";
import { useHistory, useLocation } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
import useStorages from "./useStorages";
import ReactImageGalleryRenderItem from "./ReactImageGalleryRenderItem";
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
export default function ArtistImageRolling({
  item,
  arrowColor = "#fff",
}: {
  item: any;
  arrowColor?: string;
}) {
  const history = useHistory();
  const images = useStorages(item.images);
  const ref = React.useRef<ReactImageGallery>(null);
  const { state } = useLocation<{ index: number }>();
  const index = state?.index ?? 0;
  if (!images) return null;
  return (
    <ImageGallery
      startIndex={index}
      ref={ref}
      infinite={false}
      items={images.map((i) => ({ original: i }))}
      showNav={true}
      onClick={() =>
        history.replace(`/artist/${item.id}/images`, {
          index: ref.current?.getCurrentIndex(),
        })
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
              color: ${arrowColor};
              opacity: ${disabled ? 0.7 : 1};
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
              color: ${arrowColor};
              bottom: -40px;
              left: 60px;
              opacity: ${disabled ? 0.7 : 1};
            `}
          />
        );
      }}
      renderFullscreenButton={renderFullscreenButton}
      renderItem={ReactImageGalleryRenderItem}
    />
  );
}
