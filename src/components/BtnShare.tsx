import React from "react";
import Share from "../assets/svg/Share";
import { css } from "emotion";
export default function BtnShare({
  color = "#cccccc",
  hash,
  title = "Datzpress",
}: {
  color?: string;
  hash?: string;
  title?: string;
}) {
  function handler() {
    if (window.navigator.share) {
      const href = window.location.href;
      window.navigator.share({
        title: title,
        url: href + hash ? "#" + hash : "",
      });
    } else {
      // fallback
    }
  }
  return (
    <button
      onClick={handler}
      className={css`
        margin-right: 16px;
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 1.21;
        color: #afafaf;
        align-self: flex-start;
      `}
    >
      <Share
        color={color}
        className={css`
          height: 15px;
        `}
      />
      <div
        className={css`
          margin-left: 5px;
        `}
      >
        share
      </div>
    </button>
  );
}
