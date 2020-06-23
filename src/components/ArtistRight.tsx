import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import ArtistWidget from "./ArtistWidget";
import PublicationWidget from "./PublicationWidget";
import ExhibitionWidget from "./ExhibitionWidget";
import EventWidget from "./EventWidget";
import { useHistory } from "react-router-dom";
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
  margin-left: 30px;
  border-top: 1px solid #ffffff;
`;
export default function PublicationItemPhotos() {
  const isDeskTop = useDesktop();

  return (
    <section className={isDeskTop ? desktopContainer : mobileContainer}>
      <PublicationWidget dark />
      <ExhibitionWidget dark />
      <EventWidget dark />
    </section>
  );
}
