import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
import { useParams } from "react-router-dom";
import useNewsIndex from "../utils/useNewsIndex";
const stickyContainer = css`
  position: sticky;
  top: 79px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 79px);
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 37px;
`;
export default function NewsItemLeftSticky() {
  const isDesktop = useDesktop();
  const { id } = useParams();
  const item = useNewsIndex(id);
  return (
    <section
      className={
        isDesktop
          ? stickyContainer
          : css`
              ${flexcolumn}
              position: relative;
              text-align: center;
              color: #ffffff;
              overflow: hidden;
              max-height: 588px;
            `
      }
    >
      <EventCoverWidget
        linkDisabled
        dark
        type="newsitem"
        images={item.images}
        fit={isDesktop ? "height" : "width"}
      />
    </section>
  );
}
