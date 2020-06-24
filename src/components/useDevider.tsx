import React from "react";
import useDesktop from "./useDesktop";
import { css } from "emotion";
export default function useDevider() {
  const isDeskTop = useDesktop();
  const devider = (
    <div
      className={css`
        margin-left: ${isDeskTop ? 47 : 17}px;
        margin-right: ${isDeskTop ? 47 : 17}px;
        height: 0;
        border-top: solid 1px #afafaf;
      `}
    />
  );
  return devider;
}
