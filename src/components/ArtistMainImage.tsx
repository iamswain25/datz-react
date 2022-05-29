import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistImageRolling from "./ArtistImageRolling";
import useNavTopHeight from "./useNavTopHeight";
export default function ArtistMainImage({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const { desktopHeight } = useNavTopHeight();
  const { name, genre } = item;
  const nameClassEn = css`
    height: 27px;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    margin-top: 14px;
    margin-bottom: 10px;
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
          height: ${isDesktop ? desktopHeight : "auto"};
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
        <div className={nameClassEn}>{name}</div>
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
