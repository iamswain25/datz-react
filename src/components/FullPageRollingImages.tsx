import React from "react";

import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useStorages from "./useStorages";
import useLang from "./useLang";
export default function FullPageRollingImages({
  style,
  items,
}: {
  items: any[];
  style?: React.CSSProperties;
}) {
  const isDesktop = useDesktop(false);
  const [classes] = useLang("ebgaramond");
  const imageArr = React.useMemo(() => items.map((a) => a.image), [items]);
  const nullImages = useStorages(imageArr);
  const images = nullImages?.map((a) => ({ original: a })) || [];
  const [index, setIndex] = React.useState(0);
  const item = items[index];
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
  const typeClass = classes.type(
    css`
      font-size: ${isDesktop ? 19 : 16}px;
      line-height: ${isDesktop ? 1.21 : 1.19};
      margin-top: ${isDesktop ? 0 : 5}px;
    `
  );
  const titleClass = classes.title(isDesktop ? 27 : 22, 1.35);
  const authorClass = classes.title(
    isDesktop ? 21 : 20,
    1.4,
    css`
      letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
      text-align: center;
      margin-top: ${isDesktop ? 4 : 3}px;
    `
  );
  const { type, title, text, color = "#5d5d5d", logo } = item || {};
  return (
    <div
      style={{
        height: "calc(100vh - 79px)",
        overflow: "hidden",
        paddingBottom: isDesktop ? 37 : 17,
        paddingLeft: isDesktop ? 37 : 17,
        paddingRight: isDesktop ? 37 : 17,
        position: "relative",
        ...style,
      }}
    >
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
        onSlide={onslideHandler}
        lazyLoad
        slideInterval={5000}
      />
      <div
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: ${isDesktop ? 37 : 17}px;
          color: ${color};
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin: 0 20px;
          `}
        >
          <Link
            to={item?.url || ""}
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <div className={typeClass}>{type}</div>
            <hr
              className={css`
                border-top: 1px solid ${color};
                width: ${isDesktop ? "555px" : "auto"};
                align-self: ${isDesktop ? "auto" : "stretch"};
                margin-top: ${isDesktop ? 8 : 3}px;
                margin-bottom: ${isDesktop ? 18 : 16}px;
              `}
            />
            <div className={titleClass}>{title}</div>
            <div className={authorClass}>{text}</div>
          </Link>
        </div>
        <Link
          to={item?.url || ""}
          className={css`
            display: flex;
            flex: 1;
          `}
        />
        <Logo
          type={logo}
          color={color}
          className={css`
            bottom: ${isDesktop ? 29 : 25}px;
            left: ${isDesktop ? 32 : 23}px;
            position: absolute;
            padding: ${isDesktop ? 37 : 20}px;
          `}
        />
      </div>
    </div>
  );
}
