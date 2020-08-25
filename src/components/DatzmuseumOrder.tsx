import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { flexrowcenter } from "./styles";
import DatzMuseum from "../assets/svg/DatzMuseum";

export default function DatzmuseumOrder({
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
        font-size: 16px;
        line-height: 1.19;
        color: #707070;
        font-family: BauerGroteskOTW03;
      `}
    >
      <Link to="/" className={flexrowcenter}>
        <DatzMuseum />
      </Link>
      <a
        href={order}
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          ${flexrowcenter}
          color: #707070;
        `}
      >
        Visit DMA {">"}
      </a>
    </div>
  );
}
