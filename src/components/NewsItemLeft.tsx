import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import EventCoverWidget from "./EventCoverWidget";
import { flexcolumn } from "./styles";
import useParams from "./useParams";
import useItemIndex from "../utils/useItemIndex";
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
export default function NewsItemLeft() {
  const isDesktop = useDesktop();
  const { id } = useParams();
  const item = useItemIndex(id, "new");
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
            `
      }
    >
      <EventCoverWidget
        dark
        images={item.images}
        fit={isDesktop ? "height" : "width"}
      />
    </section>
  );
}
