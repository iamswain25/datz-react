import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistWidget from "./ArtistWidget";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import BtnBack from "./BtnBack";
const mobileContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
const desktopContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 40px;
`;
export default function PublicationItemPhotos() {
  const isDeskTop = useDesktop();

  return (
    <section className={isDeskTop ? desktopContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 17px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.24;

            text-align: center;
            color: #707070;
            padding-bottom: 7px;
            border-bottom: solid 1px #707070;
          `}
        >
          Related
        </div>
        <ArtistWidget />
        <PublicationWidget />
        <ExhibitionWidget />
        <EventWidget />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}
      >
        {!isDeskTop && <BtnBack />}
        <button
          onClick={(e) =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={css`
            padding: 20px;
            height: 58px;
            font-family: BauerGroteskOTW03;
            font-size: 14px;
            line-height: 1.21;
            text-align: center;
            color: #707070;
          `}
        >
          Top {">"}
        </button>
      </div>
    </section>
  );
}
