import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistWidget from "./ArtistWidget";
import PublicationWidget from "./PublicationWidget";
import EventWidget from "./EventWidget";
import { bottomBtn37 } from "./styles";
import useDoc from "../utils/useDoc";
const mobileContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
const desktopContainer = css`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 40px;
`;
export default function ExhibitionMoreRight() {
  const isDesktop = useDesktop();
  const item = useDoc("exhibition");
  return (
    <section className={isDesktop ? desktopContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            height: 31px;
            font-family: datz-medium;
            font-size: 17px;
            line-height: 1.24;
            text-align: center;
            color: #707070;
            padding-bottom: 8px;
            border-bottom: solid 1px #707070;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: ${isDesktop ? 17 : 0}px;
            margin-right: ${isDesktop ? 17 : 0}px;
          `}
        >
          Related
        </div>
        <ArtistWidget rel_artists={item.rel_artists} />
        <PublicationWidget rel_publications={item.rel_publications} />
        <EventWidget rel_events={item.rel_events} />
      </div>
      <div className={bottomBtn37} />
    </section>
  );
}
