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
  }>
) {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        position: absolute;
      `}
    >
      <section
        className={css`
          position: absolute;
          font-family: datz-medium;
          box-sizing: border-box;
          top: -250%;
          transform: translate(-50%, -50%);
          background-color: white;
          border-radius: 8px;
          padding: 12px;
          color: #5d5d5d;
          width: ${isDesktop ? 40 : 80}vw;
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
            font-size: 4em;
            margin-block-end: 0.3em;
          `}
        >
          {props.isEn ? "Datzpress" : "닻프레스"}
        </h1>
        <p
          className={css`
            font-size: 2em;
          `}
        >
          {props.text ??
            `Find us at Achasan-ro 471, CS Plaza #B102, Gwangjin-gu, Seoul, South
        Korea, 05035. Underground parking is available on-site. Enter CS Plaza
        building at Achasan ro. Metro lines is Green line No. 2, Gangbyeon
        Station.`}
        </p>
      </section>
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
