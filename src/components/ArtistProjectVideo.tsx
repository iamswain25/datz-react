import React from "react";
import { css } from "emotion";
import DatzArtistProject from "./DatzArtistProject";
import clsx from "clsx";
export default function ArtistProjectVideo({ top }: { top: any[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <section className={css`
   background-color: black;
  `}>
      <video
        autoPlay
        muted
        loop
        className={css`
          width: 100%;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
        `}
      >
        <source src="/artist-project_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={css`
          width: 100%;
          height: 100vh;
          position: relative;
        `}
      >
        <DatzArtistProject item={top[currentIndex]} />
        <div className="image-gallery-bullets">
          <div
            className="image-gallery-bullets-container"
            role="navigation"
            aria-label="Bullet Navigation"
          >
            {top.map((_, index) => {
              function bulletOnClick() {
                setCurrentIndex(index);
              }
              return (
                <button
                  type="button"
                  className={clsx("image-gallery-bullet", {
                    active: currentIndex === index,
                  })}
                  key={`bullet-${index}`}
                  onClick={bulletOnClick}
                  aria-pressed={currentIndex === index ? "true" : "false"}
                  aria-label={`Go to Slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
