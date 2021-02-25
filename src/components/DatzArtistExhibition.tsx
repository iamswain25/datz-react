import React from "react";
import { css } from "emotion";
import { paddingH17 } from "./styles";
import DatzSvgs from "./DatzSvgs";
import useDesktop from "./useDesktop";
import DarkroomLong from "../assets/svg/DarkroomLong";
import DatzMuseum from "../assets/svg/DatzMuseum";
import DmaKo from "../assets/svg/DmaKo";
import Dfrontspace from "../assets/svg/Dfrontspace";
import Instagram from "../assets/svg/Instagram";
import Fb from "../assets/svg/Fb";
const dividerV = (className = "") => (
  <div
    className={css`
      margin-left: 37px;
      margin-right: 21px;
      width: 0;
      height: 29px;
      border-left: solid 1px #707070;
      border-color: white;
      ${className}
    `}
  />
);
function logo(key: number) {
  switch (key) {
    case 0:
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
            height: 71px;
            margin: 0 37px;
            padding: 0 30px;
            justify-content: center;
            overflow: hidden;
          `}
        >
          <DatzMuseum
            color="white"
            className={css`
              width: 140px;
            `}
          />
          {dividerV(css`
            margin-left: 13px;
            margin-right: 10px;
          `)}
          <DarkroomLong color="white" />
        </div>
      );
    case 1:
      return <DmaKo color="white" />;
    case 2:
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
            height: 71px;
            margin: 0 37px;
            padding: 0 30px;
            justify-content: center;
            overflow: hidden;
          `}
        >
          <DarkroomLong color="white" />
          {dividerV(css`
            margin-left: 13px;
            margin-right: 20px;
          `)}
          <Dfrontspace
            color="white"
            className={css`
              height: 28px;
            `}
          />
        </div>
      );
    default:
      return <DatzSvgs color="white" />;
  }
}
function links(key: number) {
  switch (key) {
    case 0:
      return null;
    case 1:
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
            font-size: 16px;
            margin: 27px 0 0;
            padding: 0 30px;
            justify-content: center;
            overflow: hidden;
            pointer-events: auto;
          `}
        >
          <a
            href="https://www.facebook.com/datzmuseum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fb
              color="white"
              className={css`
                width: 24px;
                height: 24px;
                margin-right: 23px;
              `}
            />
          </a>
          <a
            href="https://www.instagram.com/datzmuseum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              color="white"
              className={css`
                width: 24px;
                height: 24px;
                margin-right: 34px;
              `}
            />
          </a>

          <a
            href="https://www.datzmuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
            `}
          >
            Visit DMA {">"}
          </a>
        </div>
      );
    case 2:
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
            font-size: 16px;
            margin: 27px 0 0;
            padding: 0 30px;
            justify-content: center;
            overflow: hidden;
            pointer-events: auto;
          `}
        >
          <a
            href="https://www.instagram.com/d.ark.room"
            target="_blank"
            rel="noopener noreferrer"
            className={css``}
          >
            <Instagram
              color="white"
              className={css`
                width: 24px;
                height: 24px;
                margin-right: 34px;
              `}
            />
          </a>
          <a
            href="/exhibitions/darkroom"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
              margin-right: 25px;
            `}
          >
            Past Exhibition {">"}
          </a>
          <a
            href="/events/all"
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              text-decoration: underline;
            `}
          >
            Past Event {">"}
          </a>
        </div>
      );
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
        pointer-events: none;
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: datz-medium;
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
        {links(item.key)}
      </div>
    </div>
  );
}
