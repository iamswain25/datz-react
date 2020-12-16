import React from "react";
import { css } from "emotion";
import HomeEventLeft from "./HomeEventLeft";
import HomeEventRight from "./HomeEventRight";
import useDesktop from "./useDesktop";
export default function HomeEvent({ items }: { items: any[] }) {
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
        <HomeEventLeft items={items} />
      ) : (
        <div
          className={css`
            min-height: 527px;
            max-height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            padding: 17px;
            padding-top: 0;
          `}
        >
          <HomeEventLeft items={items} />
        </div>
      )}
      <section
        className={css`
          width: ${isDesktop ? "calc(50% - 14px)" : "100%"};
          display: flex;
          flex-direction: column;
          overflow: hidden;
          margin-left: ${isDesktop ? 14 : 0}px;
        `}
      >
        <HomeEventRight />
      </section>
    </div>
  );
}
