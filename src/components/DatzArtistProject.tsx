import React from "react";
import { css } from "emotion";
import { paddingH55 } from "./styles";
import DatzSvgs from "./DatzSvgs";
import useDesktop from "./useDesktop";
export default function DatzArtistProject() {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        className={css`
          ${paddingH55}
          font-family: BauerGroteskOTW03;
          font-size: 23px;
          line-height: 1.17;
          text-align: center;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        `}
      >
        <div
          className={css`
            margin-top: ${isDesktop ? 111 : 21}px;
            flex: 1;
            width: 100%;
          `}
        >
          Datz Artist Projects
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
              max-width: 600px;
              font-size: 19px;
              line-height: 1.42;
              margin-top: 34px;
            `}
          >
            Datz Artist Project, run by Datz Community, is a program that
            supports ideal collaboration among curators, artists, designers and
            bookmakers based on their expertise in the field of visual arts.
          </div>
          <div
            className={css`
              margin-top: 27px;
            `}
          >
            <a
              href="community"
              className={css`
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              About Datz Community {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
