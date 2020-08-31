import React from "react";
import EventItemLeftSticky from "../components/EventItemLeftSticky";
import EventItemRight from "../components/EventItemRight";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
import useEventIndex from "../utils/useEventIndex";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function EventItem() {
  const { id } = useParams();
  const item = useEventIndex(id);
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <>
        <ArtistHeader sticky isWhite />
        <section className={desktopContainer}>
          <EventItemLeftSticky images={item.images} />
          <EventItemRight item={item} />
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader sticky isWhite />
      <EventItemRight
        item={item}
        children={<EventItemLeftSticky images={item.images} />}
      />
    </>
  );
}
