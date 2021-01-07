import React from "react";
import { css } from "emotion";
import { paddingH55, paddingH27 } from "./styles";
import DatzSvgs from "./DatzSvgs";
import useDesktop from "./useDesktop";
export default function DatzArtistProject({ item }: { item: any }) {
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
        pointer-events: none;
      `}
    >
      <div
        className={css`
          ${isDesktop ? paddingH55 : paddingH27}
          font-family: datz-medium;
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
          {isDesktop && <DatzSvgs color="white" />}
          <div
            className={css`
              max-width: 600px;
              font-size: 19px;
              line-height: 1.42;
              margin-top: 34px;
            `}
          >
            {item?.text}
          </div>
          <div
            className={css`
              margin-top: 27px;
            `}
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={item?.url}
              className={css`
                pointer-events: all;
                text-decoration: underline;
                font-size: 16px;
                line-height: 1.19;
              `}
            >
              About Datz Community &gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
