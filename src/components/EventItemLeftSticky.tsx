import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
const stickyContainer = css`
  position: sticky;
  top: 79px;
  width: calc(50% - 20px);
  height: calc(100vh - 79px);
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 37px;
`;
const mobileContainer = css`
  position: relative;
  overflow: hidden;
  max-height: 588px;
  ${flexcolumn}
`;
export default function EventItemLeftSticky({ images }: { images: string[] }) {
  const isDesktop = useDesktop();
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <EventCoverWidget
        images={images}
        type="event"
        linkDisabled
        fit={isDesktop ? "height" : "width"}
      />
    </div>
  );
}
