import React from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import { css } from "emotion";
import { isIE } from "../utils/detectIe";
function cover(item: ReactImageGalleryItem) {
  return (
    <div className="image-gallery-image">
      <div
        className={css`
          background-image: url(${item.original});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
        `}
      ></div>
    </div>
  );
}
export function contain(item: ReactImageGalleryItem) {
  return (
    <div className="image-gallery-image">
      <div
        className={css`
          background-image: url(${item.original});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
        `}
      ></div>
    </div>
  );
}
const ReactImageGalleryRenderItem = isIE ? cover : undefined;
export default ReactImageGalleryRenderItem;
export const RenderItemContain = isIE ? contain : undefined;
