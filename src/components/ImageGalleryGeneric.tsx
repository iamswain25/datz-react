import React from "react";
import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import useStorages from "./useStorages";
import useLang from "./useLang";
export default function ImageGalleryGeneric({ items = [] }: { items?: any[] }) {
  const isDesktop = useDesktop();
  const [index, setIndex] = React.useState(0);
  const item = items[index];
  const [classes, en] = useLang("ebgaramond");
  const galleryRef = React.useRef<ImageGallery | null>(null);
  function onslideHandler(index: number) {
    setIndex(index);
  }
  function mouseOverHandler() {
    galleryRef.current?.pause();
  }
  function mouseLeaveHandler() {
    galleryRef.current?.play();
  }
  const titleClass = classes.title(
    isDesktop ? 25 : 20,
    1.36,
    css`
      letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
      margin-top: ${en ? 0 : 1}px;
    `
  );
  const authorClass = classes.title(
    isDesktop ? 20 : 19,
    1.4,
    css`
      letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
      margin-top: ${isDesktop ? 4 : 3}px;
    `
  );
  const imageArr = React.useMemo(() => items.map((a) => a.image), [items]);
  const nullImages = useStorages(imageArr);
  const images = nullImages?.map((a) => ({ original: a })) || [];
  const { type = "", title = "", text = "", color = "#fff" } = item || {};
  return (
    <>
      <ImageGallery
        ref={galleryRef}
        infinite={true}
        items={images}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={true}
        additionalClass={images.length > 1 ? undefined : "no-bullets"}
        onSlide={onslideHandler}
        slideInterval={5000}
      />
      <div
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className={css`
          position: absolute;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-itmes: center;
          padding: ${isDesktop ? 37 : 22}px 17px 0 17px;
          color: ${color};
        `}
      >
        <div
          className={css`
            font-family: datz-medium;
            font-size: ${isDesktop ? 19 : 16}px;
            line-height: ${isDesktop ? 1.21 : 1.19};
            text-align: center;
            height: 23px;
          `}
        >
          {type}
        </div>
        <hr
          className={css`
            border-top: 1px solid ${color};
            width: 100%;
            margin-top: ${isDesktop ? 8 : 3}px;
            margin-bottom: ${isDesktop ? 18 : 16}px;
          `}
        />
        <div className={titleClass}>{title}</div>
        <div className={authorClass}>{text}</div>
        <Logo
          type={item?.logo}
          color={color}
          className={css`
            bottom: ${isDesktop ? 29 : 25}px;
            left: ${isDesktop ? 32 : 23}px;
            position: absolute;
          `}
        />
      </div>
    </>
  );
}
