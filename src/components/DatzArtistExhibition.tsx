import React from "react";
import { css } from "emotion";
import { paddingH17 } from "./styles";
import DatzSvgs from "./DatzSvgs";
export default function DatzArtistExhibition() {
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
      <div
        className={css`
          margin-top: 50px;
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
      <div
        className={css`
          margin-bottom: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <DatzSvgs color="white" />
        <div
          className={css`
            margin-top: 34px;
            max-width: 600px;
            font-size: 19px;
            line-height: 1.42;
          `}
        >
          In the exhibition space, there is an exhibition with the contents of
          Datz Press.
          <div
            className={css`
              font-size: 14px;
              line-height: 1.14;
              margin-top: 3px;
            `}
          >
            *The two spaces are operated in conjunction with the support of the
            book project, so there is no separate submission for a exhibition.
          </div>
        </div>
      </div>
    </div>
  );
}
