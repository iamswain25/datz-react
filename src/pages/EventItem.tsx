import React from "react";
import EventItemLeftSticky from "../components/EventItemLeftSticky";
import EventItemRight from "../components/EventItemRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function EventItem() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <>
        <ArtistHeader sticky isWhite />
        <section className={desktopContainer}>
          <EventItemLeftSticky />
          <EventItemRight />
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader sticky isWhite />
      <EventItemRight children={<EventItemLeftSticky />} />
    </>
  );
}
