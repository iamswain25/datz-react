import React from "react";
import { css } from "emotion";
import { useMediaQuery } from "react-responsive";
import UpcomingWidget from "./UpcomingWidget";
import EventCardMain from "./EventCardMain";
import { events } from "../@type/events";
export default function PastEventsRight() {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return (
    <>
      <EventCardMain event={events[0]} />
      <div
        className={
          isDesktop
            ? ""
            : css`
                padding-left: 27px;
                padding-right: 27px;
              `
        }
      >
        <UpcomingWidget />
      </div>
    </>
  );
}
