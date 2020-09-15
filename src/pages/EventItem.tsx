import React from "react";
import EventItemLeftSticky from "../components/EventItemLeftSticky";
import EventItemRight from "../components/EventItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
import useDoc from "../utils/useDoc";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function EventItem() {
  const item = useDoc("event");
  const isDesktop = useDesktop(true);
  if (isDesktop) {
    return (
      <>
        <ArtistHeader sticky isWhite closeTo="/event" />
        <section className={desktopContainer}>
          <EventItemLeftSticky images={item.images} />
          <EventItemRight item={item} />
        </section>
      </>
    );
  }
  return (
    <>
      <ArtistHeader sticky isWhite closeTo="/event" />
      <EventItemRight
        item={item}
        children={<EventItemLeftSticky images={item.images} />}
      />
    </>
  );
}
