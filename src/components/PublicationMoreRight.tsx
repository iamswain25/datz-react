import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistWidget from "./ArtistWidget";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import useParams from "./useParams";
import { bottomBtn37 } from "./styles";
import useItemIndex from "../utils/useItemIndex";
const mobileContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
const desktopContainer = css`
  width: calc(50% - 30px - 37px);
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 40px;
`;
export default function PublicationMoreRight() {
  const isDesktop = useDesktop();
  const { address } = useParams();
  const { artists, publications, exhibitions, events } = useItemIndex(address);
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
            font-family: BauerGroteskOTW03;
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
        <ArtistWidget artists={artists} />
        <PublicationWidget publications={publications} />
        <ExhibitionWidget exhibitions={exhibitions} />
        <EventWidget events={events} />
      </div>
      <div className={bottomBtn37} />
    </section>
  );
}
