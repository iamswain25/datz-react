import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
const headerStyle = css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  padding: 0 10px;
`;
export default function CarouselBtnGroup({
  next,
  previous,
  children,
  carouselState,
  dark = false,
  hasPadding = true,
  plusMargin = 0,
  noBorderBottom = false,
}: React.PropsWithChildren<{
  next?: () => void;
  previous?: () => void;
  plusMargin?: number;
  dark?: boolean;
  hasPadding?: boolean;
  noBorderBottom?: boolean;
  carouselState?: {
    totalItems: number;
    currentSlide: number;
    slidesToShow: number;
  };
}>) {
  const { totalItems = 0, currentSlide = 0, slidesToShow = 0 } =
    carouselState ?? {};
  const isDesktop = useDesktop();
  const isBeginning = currentSlide === 0;
  const isEnding = currentSlide >= totalItems - slidesToShow;
  return (
    <section
      className={css`
        margin: 0 ${isDesktop ? 0 : plusMargin}px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 10px ${isDesktop && hasPadding ? 17 : 0}px;
        `}
      >
        <div
          className={css`
            margin-left: -10px;
          `}
        >
          <button
            type="button"
            onClick={previous}
            className={css`
              ${headerStyle};
              color: ${isBeginning ? "#cccccc" : dark ? "#ffffff" : "#707070"};
              margin-right: 3px;
            `}
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className={css`
              ${headerStyle};
              color: ${isEnding ? "#cccccc" : dark ? "#ffffff" : "#707070"};
              margin-left: 3px;
            `}
          >
            →
          </button>
        </div>
        {children}
      </div>
      {!noBorderBottom && (
        <hr
          className={css`
            height: 0;
            border-top: solid 1px ${dark ? "#ffffff" : "#707070"};
            margin-left: ${isDesktop && hasPadding ? 17 : 0}px;
            margin-right: ${isDesktop && hasPadding ? 17 : 0}px;
          `}
        />
      )}
    </section>
  );
}
