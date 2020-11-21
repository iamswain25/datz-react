import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
const stickyContainer = css`
  position: fixed;
  top: 79px;
  width: calc(50% - 57px);
  height: calc(100vh - 79px);
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 37px;
`;
const mobileContainer = css`
  position: relative;
  overflow: hidden;
  ${flexcolumn}
`;
export default function NewsItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  return (
    <>
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <EventCoverWidget dark images={item.images} type="news" />
      </div>
      <div
        className={css`
          width: calc(50% - 20px);
          margin-right: 20px;
        `}
      />
    </>
  );
}
