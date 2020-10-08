import React from "react";
import { css } from "emotion";
import useBtnBack from "./useBtnBack";

export default function BtnBack({
  color = "#707070",
  width = "100%",
  borderTop = false,
}) {
  const goBack = useBtnBack();
  return (
    <button
      onClick={goBack}
      className={css`
        font-family: datz-medium;
        font-size: 14px;
        line-height: 1.21;
        text-align: center;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${width};
        border-top: ${borderTop ? 1 : 0}px solid ${color};
        color: ${color};
      `}
    >
      {"<"} back
    </button>
  );
}
