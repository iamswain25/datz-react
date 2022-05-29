import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  position: relative;
  overflow: hidden;
  max-height: 527px;
  ${flexcolumn}
`;
export default function EventItemLeft({ images }: { images: string[] }) {
  const isDesktop = useDesktop();
  const { navTopHeight } = useNavTopHeight();
  const stickyContainer = css`
    position: absolute;
    width: calc(50% - 57px);
    height: calc(100vh - ${navTopHeight}px);
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 37px;
  `;
  return (
    <>
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <EventCoverWidget images={images} type="event" />
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
