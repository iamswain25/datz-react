import React from "react";
import { css } from "emotion";
import { flexrowcenter } from "./styles";
import Logo from "./Logo";

export default function DatzpressOrder({
  order = "https://datzpress.com/product/offerings-se",
}) {
  return (
    <div
      className={css`
        ${flexrowcenter}
        justify-content: space-between;
        border-bottom: solid 1px #707070;
        padding-bottom: 8px;
        min-height: 31px;
        height: 31px;
      `}
    >
      <Logo type="datzpress" className={flexrowcenter} color="#707070" />
      <a
        href={order}
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          ${flexrowcenter}
          color: #707070;
        `}
      >
        Order &gt;
      </a>
    </div>
  );
}
