import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Datzpress from "../assets/svg/Datzpress";
import { flexrowcenter } from "./styles";

export default function DatzpressOrder() {
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
      <Link to="/" className={flexrowcenter}>
        <Datzpress />
      </Link>
      <a
        href="https://datzpress.com/product/offerings-se"
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          ${flexrowcenter}
          color: #707070;
        `}
      >
        Order {">"}
      </a>
    </div>
  );
}
