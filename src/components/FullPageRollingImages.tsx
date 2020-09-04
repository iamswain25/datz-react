import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
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
  function onslideHandler(index: number) {
    setIndex(index);
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
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isDesktop ? 37 : 17,
          color,
        }}
      >
        <Link to={item.url}>
          <div className={typeClass}>{type}</div>
          <hr
            className={css`
              border-top: 1px solid ${color};
              width: ${isDesktop ? "555px" : "calc(100% - 40px)"};
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
