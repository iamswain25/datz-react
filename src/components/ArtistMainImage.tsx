import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistImageRolling from "./ArtistImageRolling";
const defaultContainer = css`
  display: flex;
  flex-direction: column;
  font-family: BauerGroteskOTW03;
  text-align: center;
  color: #ffffff;
`;
export default function ArtistMainImage() {
  const isDeskTop = useDesktop();
  console.log(isDeskTop);
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
        <div
          className={css`
            font-family: ArnoPro-Display;
            font-size: 27px;
            line-height: 1.37;
            letter-spacing: 0.54px;
            margin-top: 14px;
          `}
        >
          Amanda Marchand
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
