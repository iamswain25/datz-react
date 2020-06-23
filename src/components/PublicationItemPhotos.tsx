import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import dtz6539 from "../assets/images/nothingwill/dtz-6539.png";
import dtz6562 from "../assets/images/nothingwill/dtz-6562.png";
import dtz8176 from "../assets/images/nothingwill/dtz-8176.png";
import dtz8206 from "../assets/images/nothingwill/dtz-8206.png";
import dtz8291 from "../assets/images/nothingwill/dtz-8291.png";
import dtz8313 from "../assets/images/nothingwill/dtz-8313.png";
import dtz8316 from "../assets/images/nothingwill/dtz-8316.png";
import dtz8318 from "../assets/images/nothingwill/dtz-8318.png";
import dtz8330 from "../assets/images/nothingwill/dtz-8330.png";
import dtz8344 from "../assets/images/nothingwill/dtz-8344.png";
import dtz8351 from "../assets/images/nothingwill/dtz-8351.png";
import ImageGallery from "react-image-gallery";
import Arrow from "./Arrow";
const images = [
  dtz6539,
  dtz6562,
  dtz8176,
  dtz8206,
  dtz8291,
  dtz8313,
  dtz8316,
  dtz8318,
  dtz8330,
  dtz8344,
  dtz8351,
];
export default function PublicationItemPhotos() {
  const isDeskTop = useDesktop();
  console.log(isDeskTop);
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
              `}
            >
              <img
                src={src}
                onClick={imageClickHandler}
                alt="book"
                className={css`
                  margin-bottom: ${images.length - 1 === i ? 0 : 28}px;
                  width: 100%;
                  cursor: pointer;
                `}
              />
              {i === 0 && (
                <Datzpress
                  color="#808080"
                  className={css`
                    position: absolute;
                    left: 30px;
                    bottom: 60px;
                  `}
                />
              )}
            </div>
          );
        })}
        <div
          className={css`
            text-align: center;
          `}
        >
          <button
            onClick={(e) =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className={css`
              padding: 20px;
              height: 58px;
              font-family: BauerGroteskOTW03;
              font-size: 14px;
              line-height: 1.21;
              text-align: center;
              color: #707070;
            `}
          >
            Top {">"}
          </button>
        </div>
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
            items={images.map((i) => ({ original: i }))}
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
