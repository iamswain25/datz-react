import React from "react";
import { css } from "emotion";
import useBtnBack from "./useBtnBack";

export default function BtnBack({
  color = "#707070",
  full = false,
  borderTop = false,
}) {
  const goBack = useBtnBack();
  return (
    <button
      onClick={goBack}
      className={css`
        font-family: BauerGroteskOTW03;
        font-size: 14px;
        line-height: 1.21;
        text-align: center;
        padding: 10px;
        width: ${full ? "100%" : "auto"};
        border-top: ${borderTop ? 1 : 0}px solid ${color};
        color: ${color};
      `}
    >
      {"<"} back
    </button>
  );
}
