import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
const headerStyle = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
`;
export default function CarouselBtnGroup({
  next,
  previous,
  children,
  carouselState,
  dark = false,
  hasPadding = true,
}: React.PropsWithChildren<{
  next?: () => void;
  previous?: () => void;
  dark?: boolean;
  hasPadding?: boolean;
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
  const isEnding = currentSlide === totalItems - slidesToShow;
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: ${isDesktop && hasPadding ? 17 : 0}px;
          padding-right: ${isDesktop && hasPadding ? 17 : 0}px;
        `}
      >
        <div>
          <button
            onClick={previous}
            className={css`
              ${headerStyle};
              color: ${isBeginning ? "#cccccc" : dark ? "#ffffff" : "#707070"};
              margin-right: 13px;
            `}
          >
            ←
          </button>
          <button
            onClick={next}
            className={css`
              ${headerStyle};
              color: ${isEnding ? "#cccccc" : dark ? "#ffffff" : "#707070"};
              margin-left: 13px;
            `}
          >
            →
          </button>
        </div>
        {children}
      </div>
      <hr
        className={css`
          height: 0;
          border-top: solid 1px ${dark ? "#ffffff" : "#707070"};
          margin-left: ${isDesktop && hasPadding ? 17 : 0}px;
          margin-right: ${isDesktop && hasPadding ? 17 : 0}px;
        `}
      />
    </>
  );
}
