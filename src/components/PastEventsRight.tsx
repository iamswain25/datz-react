import React from "react";
import { css } from "emotion";
import { useMediaQuery } from "react-responsive";
import UpcomingWidget from "./UpcomingWidget";
import EventCardMain from "./EventCardMain";
export default function PastEventsRight() {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return (
    <>
      <EventCardMain />
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
