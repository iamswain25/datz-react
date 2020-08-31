import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { marginH17 } from "./styles";
const stickyContainer = css`
  position: sticky;
  top: 79px;
  width: calc(50% - 20px);
  height: calc(100vh - 79px);
  margin-right: 20px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
  padding-bottom: 37px;
`;
const mobileContainer = css`
  position: relative;
  ${marginH17}
`;
export default function EventItemLeftSticky({ images }: { images: string[] }) {
  const isDesktop = useDesktop();
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <EventCoverWidget images={images} />
    </div>
  );
}
