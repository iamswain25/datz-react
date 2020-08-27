import React from "react";
import { css } from "emotion";
import { paddingH55 } from "./styles";
import useDesktop from "./useDesktop";
export default function DatzArtistExhibition4() {
  const isDesktop = useDesktop();
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
        ${paddingH55}
      `}
    >
      {isDesktop ? (
        <div
          className={css`
            flex: 1;
          `}
        />
      ) : (
        <div
          className={css`
            margin-top: 21px;
            width: 100%;
            flex: 1;
          `}
        >
          Residence
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
        {isDesktop && (
          <div
            className={css`
              max-width: 600px;
              font-family: ArnoPro-Subhead;
              font-size: 20px;
              line-height: 1.35;
              margin-bottom: 27px;
            `}
          >
            “Datz Press understands and responds sensitively to what an artist
            is trying to imply, making it near perfection through a delicate
            process. The only publisher that can fully digest the spirit of my
            work for 30 years and deliver all of my photos is the Datz Press.”
            <br />
            <br />- Lonnie Graham
          </div>
        )}
      </div>
    </div>
  );
}
