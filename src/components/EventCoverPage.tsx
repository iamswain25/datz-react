import React from "react";
import { css } from "emotion";
import PastEventsLeft from "./PastEventsLeft";
import PastEventsRight from "./PastEventsRight";
import useDesktop from "./useDesktop";
import { Flex } from "./div";
export default function EventCoverPage() {
  const isDeskTop = useDesktop();
  if (!isDeskTop) {
    return (
      <Flex
        className={css`
          overflow: hidden;
          padding-top: 28px;
          padding-bottom: 0;
          position: relative;
        `}
      >
        <div
          className={css`
            height: calc(100vh - 34px);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            padding: 17px;
            padding-top: 0;
          `}
        >
          <PastEventsLeft />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <PastEventsRight />
        </div>
      </Flex>
    );
  }
  return (
    <div
      style={{
        overflow: "hidden",
        padding: 37,
        paddingTop: 28,
        position: "relative",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <PastEventsLeft />
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 14px;
        `}
      >
        <PastEventsRight />
      </div>
    </div>
  );
}
