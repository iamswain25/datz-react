import React from "react";
import { css } from "emotion";
import UpcomingWidget from "./UpcomingWidget";
import HomeEventCard from "./HomeEventCard";
import useDesktop from "./useDesktop";
import useEventIndex from "../utils/useEventIndex";
export default function PastEventsRight() {
  const isDesktop = useDesktop();
  const item = useEventIndex(1);
  return (
    <>
      <HomeEventCard item={item} type="event" />
      <div
        className={css`
          padding: 0 ${isDesktop ? -6 : 21}px;
        `}
      >
        <UpcomingWidget />
      </div>
    </>
  );
}
