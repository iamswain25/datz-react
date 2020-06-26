import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Datzpress from "../assets/svg/Datzpress";
const flexrow = css`
  display: flex;
  flex-direction: row;
`;
export default function DatzpressOrder() {
  return (
    <div
      className={css`
        ${flexrow}
        align-items: center;
        justify-content: space-between;
        border-bottom: solid 1px #707070;
        padding-bottom: 8px;
        min-height: 31px;
        height: 31px;
      `}
    >
      <Link to="/" className={flexrow}>
        <Datzpress />
      </Link>
      <a
        href="https://datzpress.com/product/offerings-se"
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          ${flexrow}
          color: #707070;
        `}
      >
        Order {">"}
      </a>
    </div>
  );
}
