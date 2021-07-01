import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
export default function MapMarker(
  props: React.PropsWithChildren<{
    lat: number;
    lng: number;
    className?: string;
    text?: string;
    isEn: boolean;
    selected: boolean;
    close: any;
  }>
) {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        position: absolute;
      `}
    >
      {props.selected && (
        <section
          className={css`
            position: absolute;
            font-family: datz-medium;
            box-sizing: border-box;
            top: -250%;
            transform: translate(-50%, -50%);
            background-color: white;
            border-radius: 8px;
            padding: ${isDesktop ? 28 : 15}px;
            color: #5d5d5d;
            width: ${isDesktop ? 32 : 75}vw;
            text-align: center;
            box-shadow: 0 2px 7px 1px rgb(0 0 0 / 30%);
            ::after {
              background: linear-gradient(
                45deg,
                rgba(255, 255, 255, 1) 50%,
                rgba(255, 255, 255, 0) 51%,
                rgba(255, 255, 255, 0) 100%
              );
              box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
              content: "";
              height: 15px;
              left: 50%;
              position: absolute;
              top: 100%;
              transform: translate(-50%, -50%) rotate(-45deg);
              width: 15px;
            }
          `}
        >
          <h1
            className={css`
              font-size: 23px;
              margin-block-end: 15px;
              margin-top: 6px;
            `}
          >
            {props.isEn ? "Datzpress" : "닻프레스"}
          </h1>
          <p
            className={css`
              font-family: datz-regular;
              font-size: ${isDesktop ? 18 : 17}px;
              line-height: 1.5;
            `}
          >
            {props.text ??
              `Find us at Achasan-ro 471, CS Plaza #B102, Gwangjin-gu, Seoul, South
        Korea, 05035. Underground parking is available on-site. Enter CS Plaza
        building at Achasan ro. Metro lines is Green line No. 2, Gangbyeon
        Station.`}
          </p>
        </section>
      )}
      <img
        src="/map_marker.png"
        alt="datz"
        className={css`
          width: 41px;
          height: 56px;
          transform: translate(-50%, -50%);
        `}
      />
      {props.children}
    </div>
  );
}
