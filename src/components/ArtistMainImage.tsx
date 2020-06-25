import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistImageRolling from "./ArtistImageRolling";
import { useGlobalState, LANG } from "../store/useGlobalState";
const defaultContainer = css`
  display: flex;
  flex-direction: column;
  font-family: BauerGroteskOTW03;
  text-align: center;
  color: #ffffff;
`;
const publication = {
  en: {
    artist: "Amanda Marchand",
  },
  ko: {
    artist: "아만다 마찬드",
  },
};
export default function ArtistMainImage() {
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  const nameClassEn = css`
    height: 27px;
    font-family: ArnoPro-Display;
    font-size: ${isDesktop ? 27 : 22}px;
    line-height: ${isDesktop ? 1.37 : 1.36};
    letter-spacing: ${isDesktop ? 0.54 : 0.44}px;
    margin-top: 14px;
    margin-bottom: 5px;
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
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <section className={defaultContainer}>
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
        <div className={lang === "en" ? nameClassEn : nameClassKo}>
          {publication[lang].artist}
        </div>
        <div
          className={css`
            font-size: 14px;
            line-height: 1.21;
            margin-bottom: 20px;
          `}
        >
          Photographer
        </div>
        <ArtistImageRolling />
      </section>
    </>
  );
}
