import React from "react";
import useDesktop from "./useDesktop";
import { css } from "emotion";
export default function useDevider() {
  const isDesktop = useDesktop();
  const devider = (
    <div
      className={css`
        margin-left: ${isDesktop ? 47 : 17}px;
        margin-right: ${isDesktop ? 47 : 17}px;
        height: 0;
        border-top: solid 1px #afafaf;
      `}
    />
  );
  return devider;
}
