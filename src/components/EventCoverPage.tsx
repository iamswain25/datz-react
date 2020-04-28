import React from "react";
import { css } from "emotion";
import PastEventsLeft from "./PastEventsLeft";
import PastEventsRight from "./PastEventsRight";
import { useMediaQuery } from "react-responsive";
const devider = (
  <div
    className={css`
      margin-left: 47px;
      margin-right: 47px;
      height: 0;
      border: solid 1px #afafaf;
      margin-top: 28px;
      margin-bottom: 28px;
    `}
  />
);
export default () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 });
  if (isTabletOrMobile) {
    return (
      <div
        style={{
          overflow: "hidden",
          padding: 17,
          paddingTop: 28,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={css`
            height: calc(100vh - 34px);
            background-image: url(${require("../assets/images/half.jpg")});
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
          `}
        >
          <PastEventsLeft />
        </div>
        {devider}
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <PastEventsRight />
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        padding: 37,
        paddingTop: 28,
        position: "relative",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className={css`
          flex: 1;
          margin-right: 14px;
          background-image: url(${require("../assets/images/half.jpg")});
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
        `}
      >
        <PastEventsLeft />
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: $14px;
        `}
      >
        <PastEventsRight />
      </div>
    </div>
  );
};
