import { CircularProgress } from "@material-ui/core";
import { css } from "emotion";
import React from "react";

export default function LoadingCenter() {
  return (
    <aside
      className={css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.3;
      `}
    >
      <div
        className={css`
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
        `}
      >
        <CircularProgress color="inherit" />
      </div>
    </aside>
  );
}
