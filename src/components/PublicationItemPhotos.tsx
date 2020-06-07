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
  return (
    <section
      className={css`
        flex: 1;
      `}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className={css`
              position: relative;
            `}
          >
            <img
              src={src}
              alt="book"
              className={css`
                margin-bottom: ${images.length - 1 === i ? 0 : 28}px;
                width: 100%;
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
          Top >
        </button>
      </div>
    </section>
  );
}
