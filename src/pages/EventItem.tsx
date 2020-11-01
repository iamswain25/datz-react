import React from "react";
import EventItemLeft from "../components/EventItemLeft";
import EventItemRight from "../components/EventItemRight";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import ArtistHeader from "../components/ArtistHeader";
import { flexrow, paddingH37 } from "../components/styles";
import useDoc from "../utils/useDoc";
import ArtistCloseBtn from "../components/ArtistCloseBtn";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function EventItem() {
  const item = useDoc("event");
  const isDesktop = useDesktop(true);
  return (
    <>
      <ArtistHeader
        color="#707070"
        className={css`
          color: #707070;
          background-color: white;
        `}
      >
        <ArtistCloseBtn
          to="/event"
          title="< back to Events"
          className={css`
            color: #afafaf;
          `}
        />
      </ArtistHeader>
      {isDesktop ? (
        <section className={desktopContainer}>
          <EventItemLeft images={item.images} />
          <EventItemRight item={item} />
        </section>
      ) : (
        <EventItemRight
          item={item}
          children={<EventItemLeft images={item.images} />}
        />
      )}
    </>
  );
}
