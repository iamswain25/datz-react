import React from "react";
import { css } from "emotion";
import { paddingH17 } from "./styles";
import DatzSvgs from "./DatzSvgs";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
function logo(key: number) {
  switch (key) {
    case 0:
      return <DatzSvgs color="white" />;
    case 1:
      return <Logo type="museum" color="white" />;
    case 2:
      return <Logo type="museum" color="white" />;
    default:
      return <DatzSvgs color="white" />;
  }
}
export default function DatzArtistExhibition({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [text1, text2] = item.text.split("\n\n");

  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: BauerGroteskOTW03;
        font-size: 23px;
        line-height: 1.17;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        ${paddingH17}
      `}
    >
      {item.key ? (
        <div
          className={css`
            flex: 1;
          `}
        />
      ) : (
        <div
          className={css`
            margin-top: ${isDesktop ? 50 : 21}px;
            flex: 1;
            width: 100%;
          `}
        >
          Exhibition
          <hr
            className={css`
              margin-top: 5px;
              border-top-color: white;
              border-style: solid;
            `}
          />
        </div>
      )}
      <div
        className={css`
          margin-bottom: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {isDesktop && logo(item.key)}
        <div
          className={css`
            margin-top: 34px;
            max-width: 600px;
            font-size: 19px;
            line-height: 1.42;
          `}
        >
          {text1}
          <div
            className={css`
              font-size: 14px;
              line-height: 1.14;
              margin-top: 3px;
            `}
          >
            {text2}
          </div>
        </div>
      </div>
    </div>
  );
}
