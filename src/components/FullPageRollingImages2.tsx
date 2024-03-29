import React from "react";
import ImageGallery from "react-image-gallery";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import useStorages from "./useStorages";
import useLang from "./useLang";
import ReactImageGalleryRenderItem from "./ReactImageGalleryRenderItem";
import Link from "./Link";
import useNavTopHeight from "./useNavTopHeight";
export default function FullPageRollingImages2({ items }: { items: any[] }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("ebgaramond");
  const imageArr = React.useMemo(() => items.map((a) => a.image), [items]);
  const nullImages = useStorages(imageArr);
  const images = nullImages?.map((a) => ({ original: a })) || [];
  const [index, setIndex] = React.useState(0);
  const item = items[index];
  const { desktopHeight } = useNavTopHeight();
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
  const { type, title, text, color = "#5d5d5d", logo } = item || {};
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
  return (
    <div
      style={{
        height: isDesktop ? desktopHeight : 527,
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
        renderItem={ReactImageGalleryRenderItem}
      />
      <div
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className={css`
          width: 100%;
          height: calc(100% - 56px);
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin: 28px 0;
          padding: 37px 0;
          color: ${color ?? "#ffffff"};
        `}
      >
        <Link
          to={item?.url}
          className={css`
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px;
          `}
        >
          <div className={typeClass}>{type}</div>
          {item && (
            <hr
              className={css`
                border-top: 1px solid ${color};
                width: ${isDesktop ? "555px" : "auto"};
                align-self: ${isDesktop ? "auto" : "stretch"};
                margin-top: ${isDesktop ? 8 : 3}px;
                margin-bottom: ${isDesktop ? 18 : 16}px;
              `}
            />
          )}
          <div className={titleClass}>{title}</div>
          <div className={authorClass}>{text}</div>
        </Link>
        <Link
          to={item?.url}
          className={css`
            pointer-events: ${isDesktop ? "auto" : "none"};
            display: flex;
            flex: 1;
          `}
        />
        <Logo type={logo} color={color} absolute />
      </div>
    </div>
  );
}
