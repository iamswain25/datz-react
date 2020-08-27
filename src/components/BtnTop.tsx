import React from "react";
import { css } from "emotion";

export default function BtnTop({
  color = "#707070",
  full = false,
  borderTop = false,
}) {
  function handler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      onClick={handler}
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
      Top {">"}
    </button>
  );
}
