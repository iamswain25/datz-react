import React from "react";
import { css } from "emotion";
import ImageGallery from "react-image-gallery";
import Arrow from "../components/Arrow";
import { useHistory, useLocation } from "react-router-dom";
import useParams from "../components/useParams";
import useStorages from "../components/useStorages";
import ReactPlayer from "react-player";
import { RenderItemContain } from "../components/ReactImageGalleryRenderItem";
import useDocId from "../utils/useDocId";
import LoadingCenter from "../components/LoadingCenter";
export default function FullImageGallery() {
  const { type, id } = useParams();
  const item = useDocId(type, id);
  if (!item) return <LoadingCenter />;
  return <Gallery1 item={item} />;
}

function Gallery1({ item }: { item: any }) {
  const filtered = React.useMemo(
    () => item?.images?.filter((i: string) => !ReactPlayer.canPlay(i)),
    [item]
  );
  const images = useStorages(filtered);
  if (!images) return <LoadingCenter />;
  return <Gallery2 images={images} />;
}

function Gallery2({ images }: { images: any[] }) {
  const { id, type } = useParams();
  const {
    state: { index = 0 },
  } = useLocation<{ index: number }>();
  const [currentIndex, setCurrentIndex] = React.useState(index);
  const { replace } = useHistory();
  const images2 = images?.map((a) => ({ original: a })) || [];
  function onSlideHandler(currentIndex: number) {
    setCurrentIndex(currentIndex);
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
        items={images2}
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
            pathname: `/${type}/${id}`,
            state: { index: currentIndex },
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
        renderItem={RenderItemContain}
      />
    </section>
  );
}
