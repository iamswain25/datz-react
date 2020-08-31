import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import ImageGallery from "react-image-gallery";
import Arrow from "./Arrow";
import { bottomBtn37 } from "./styles";
import { makeUrl } from "../config/url";
import { LazyImage } from "react-lazy-images";
const classes = {
  link: css`
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #707070;
    text-align: center;
  `,
  placeholder: css`
    background-color: lightgrey;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    top: 0;
  `,
  img: css`
    cursor: pointer;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,
};
export default function ItemPhotosRight({
  images,
  type = "publication",
}: {
  images: string[];
  type?: string;
}) {
  const [isVisible, setVisible] = React.useState(false);
  const full = React.useRef<ImageGallery>(null);

  return (
    <>
      <section
        className={css`
          flex: 1;
        `}
      >
        {images.map((src, i) => {
          function imageClickHandler() {
            full.current?.slideToIndex(i);
            setVisible(true);
          }
          return (
            <div
              key={i}
              className={css`
                position: relative;
                margin-bottom: ${images.length - 1 === i ? 0 : 28}px;
                ::before {
                  content: "";
                  display: inline-block;
                  padding-bottom: 60.98%;
                  vertical-align: top;
                }
              `}
            >
              <LazyImage
                alt={`image-${i}`}
                placeholder={({ ref }) => (
                  <div ref={ref} className={classes.placeholder} />
                )}
                src={makeUrl(src)}
                actual={({ imageProps }) => (
                  <img
                    {...imageProps}
                    alt={imageProps.alt}
                    className={classes.img}
                    onClick={imageClickHandler}
                  />
                )}
              />
              {i === 0 && (
                <Datzpress
                  color="#808080"
                  className={css`
                    position: absolute;
                    left: 30px;
                    bottom: 30px;
                  `}
                />
              )}
            </div>
          );
        })}
        <button
          onClick={(e) =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={bottomBtn37}
        >
          Top {">"}
        </button>
        <div
          className={
            isVisible
              ? css`
                  position: fixed;
                  width: 100%;
                  height: 100%;
                  z-index: 2;
                  top: 0;
                  left: 0;
                  padding: 38px;
                  background-color: white;
                `
              : css`
                  display: none;
                `
          }
        >
          <ImageGallery
            ref={full}
            infinite={false}
            items={images.map((i) => ({ original: makeUrl(i) }))}
            showNav={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            autoPlay={false}
            onClick={() => setVisible(false)}
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
        </div>
      </section>
    </>
  );
}
