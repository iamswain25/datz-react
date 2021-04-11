import { css } from "emotion";
import React from "react";

export default function Hr10() {
  return (
    <hr
      className={css`
        margin: 0 10px;
        height: 10px;
        border-left: 0;
        border-color: #707070;
      `}
    />
  );
}
