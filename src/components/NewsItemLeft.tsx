import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  position: relative;
  overflow: hidden;
  ${flexcolumn}
`;
export default function NewsItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const { desktopHeight } = useNavTopHeight();
  const stickyContainer = css`
    position: absolute;
    width: calc(50% - 57px);
    height: ${desktopHeight};
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 37px;
  `;
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
