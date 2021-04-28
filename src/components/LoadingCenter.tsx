import { CircularProgress } from "@material-ui/core";
import { css } from "emotion";
import React from "react";

export default function LoadingCenter() {
  return (
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
  );
}
