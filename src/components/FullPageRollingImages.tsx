import React from "react";

import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import { makeUrl } from "../config/url";
import { Link } from "react-router-dom";
export default function FullPageRollingImages({
  style,
  items,
}: {
  items: any[];
  style?: React.CSSProperties;
}) {
  const isDesktop = useDesktop(false);
  const images =
    (items && items.map((a) => ({ original: makeUrl(a.image) }))) || [];
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
  const typeClass = css`
    font-family: BauerGroteskOTW03;
    font-size: ${isDesktop ? 19 : 16}px;
    line-height: ${isDesktop ? 1.21 : 1.19};
    text-align: center;
    margin-top: ${isDesktop ? 0 : 5}px;
  `;
  const titleClass = css`
    font-family: ArnoPro-Subhead;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    text-align: center;
  `;
  const authorClass = css`
    font-family: ArnoPro-Display;
    font-size: ${isDesktop ? 21 : 20}px;
    line-height: ${isDesktop ? 1.38 : 1.4};
    letter-spacing: ${isDesktop ? 0.42 : 0.4}px;
    text-align: center;
    margin-top: ${isDesktop ? 4 : 3}px;
  `;
  const { type, title, subtitle, color = "#5d5d5d", logo } = item;
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
        <Link
          to={item.url}
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px;
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
          <div className={authorClass}>{subtitle}</div>
        </Link>
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
