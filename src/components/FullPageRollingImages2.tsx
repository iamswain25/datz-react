import React from "react";

import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import { makeUrl } from "../config/url";
import { Link } from "react-router-dom";
export default function FullPageRollingImages2({ items }: { items: any[] }) {
  const isDesktop = useDesktop();
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
  const { type, title, subtitle, color = "#fff", logo } = item;
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
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        paddingTop: 28,
        paddingBottom: 28,
        position: "relative",
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
        slideInterval={5000}
      />
      <div
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className={css`
          width: 100%;
          height: calc(100vh - 56px);
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-top: 28px;
          margin-bottom: 28px;
          padding-top: 37px;
          color: ${color ?? "#ffffff"};
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
        <Link
          to={item.url}
          className={css`
            display: flex;
            flex: 1;
          `}
        />
        <Logo
          type={logo}
          color={color}
          className={css`
            left: ${isDesktop ? 69 : 40}px;
            bottom: ${isDesktop ? 33 : 29}px;
            position: absolute;
          `}
        />
      </div>
    </div>
  );
}
