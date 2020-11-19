import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistImageRolling from "./ArtistImageRolling";
import { useGlobalState, LANG } from "../store/useGlobalState";
export default function ArtistMainImage({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  const { name, genre } = item;
  const nameClassEn = css`
    height: 27px;
    font-family: "EB Garamond";
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    margin-top: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const nameClassKo = css`
    font-family: SpoqaHanSans;
    font-size: 23px;
    line-height: 1.17;
    height: 34px;
    margin-top: 8px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <section
        className={css`
          display: flex;
          flex-direction: column;
          position: relative;
          font-family: datz-medium;
          text-align: center;
          color: #ffffff;
          height: ${isDesktop ? "calc(100vh - 79px)" : "auto"};
          overflow: hidden;
        `}
      >
        <div
          className={css`
            font-size: 20px;
            line-height: 1.2;
            letter-spacing: 0.4px;
            padding-bottom: 3px;
            border-bottom: 1px solid #ffffff;
          `}
        >
          Artist
        </div>
        <div className={lang === "en" ? nameClassEn : nameClassKo}>{name}</div>
        <div
          className={css`
            font-size: 14px;
            line-height: 1.21;
            margin-bottom: 20px;
          `}
        >
          {genre}
        </div>
        <div
          className={css`
            flex: 1;
            display: flex;
            position: relative;
            padding-bottom: 70px;
            overflow: hidden;
            width: 100%;
          `}
        >
          <ArtistImageRolling item={item} />
        </div>
      </section>
    </>
  );
}
