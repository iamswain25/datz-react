import React from "react";
import { css } from "emotion";
import PastEventsLeft from "./PastEventsLeft";
import PastEventsRight from "./PastEventsRight";
import useDesktop from "./useDesktop";
export default function EventCoverPage() {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        overflow: hidden;
        padding: ${isDesktop ? 37 : 0}px;
        padding-top: 28px;
        position: relative;
        display: flex;
        flex-direction: ${isDesktop ? "row" : "column"};
      `}
    >
      {isDesktop ? (
        <PastEventsLeft />
      ) : (
        <div
          className={css`
            min-height: 588px;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            padding: 17px;
            padding-top: 0;
          `}
        >
          <PastEventsLeft />
        </div>
      )}
      <div
        className={css`
          width: ${isDesktop ? "calc(50% - 14px)" : "100%"};
          display: flex;
          flex-direction: column;
          margin-left: ${isDesktop ? 14 : 0}px;
        `}
      >
        <PastEventsRight />
      </div>
    </div>
  );
}
