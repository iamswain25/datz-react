import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
const headerStyle = (dark: boolean) => css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: ${dark ? "#ffffff" : "#707070"};
`;
export default function CarouselBtnGroup({
  next,
  previous,
  children,
  dark = false,
}: React.PropsWithChildren<{
  next?: () => void;
  previous?: () => void;
  dark?: boolean;
}>) {
  const isDesktop = useDesktop();
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: ${isDesktop ? 17 : 0}px;
          padding-right: ${isDesktop ? 17 : 0}px;
        `}
      >
        <div>
          <button
            onClick={previous}
            className={css`
              ${headerStyle(dark)};
              margin-right: 13px;
            `}
          >
            ←
          </button>
          <button
            onClick={next}
            className={css`
              ${headerStyle(dark)};
              margin-left: 13px;
            `}
          >
            →
          </button>
        </div>
        {children}
      </div>
      <div
        className={css`
          height: 0;
          border-bottom: solid 1px ${dark ? "#ffffff" : "#707070"};
          margin-left: ${isDesktop ? 17 : 0}px;
          margin-right: ${isDesktop ? 17 : 0}px;
        `}
      ></div>
    </>
  );
}
