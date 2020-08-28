import React from "react";
import Close from "../assets/svg/Close";
import { css } from "emotion";
import { Link } from "react-router-dom";
import ShareButtons from "./ShareButtons";
export default function CloseShare({ close = "/publication" }) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 20px;
        margin-bottom: 20px;
      `}
    >
      <Link
        to={close}
        className={css`
          height: 13px;
          font-size: 10px;
          line-height: 1.3;
          text-align: left;
          color: #afafaf;
          margin-right: 45px;
          display: flex;
          align-items: center;
        `}
      >
        <Close
          color="#afafaf"
          className={css`
            margin-right: 8px;
          `}
        />
        <span>CLOSE</span>
      </Link>
      <ShareButtons />
    </div>
  );
}
