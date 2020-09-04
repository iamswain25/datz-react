import React from "react";
import { css } from "emotion";
import UpcomingWidget from "./UpcomingWidget";
import HomeEventCard from "./HomeEventCard";
import useDesktop from "./useDesktop";
import useItemIndex from "../utils/useItemIndex";
export default function HomeEventRight() {
  const isDesktop = useDesktop(false);
  const item = useItemIndex(1, "event");
  return (
    <>
      <HomeEventCard item={item} type="event" />
      <div
        className={css`
          padding: 0 ${isDesktop ? 0 : 21}px;
        `}
      >
        <UpcomingWidget />
      </div>
    </>
  );
}
