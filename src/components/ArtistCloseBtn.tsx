import React from "react";
import { css } from "emotion";
import { Link, useHistory } from "react-router-dom";
import Close from "../assets/svg/Close";
import BtnShare from "./BtnShare";
export default function ArtistCloseBtn({
  shared = false,
  to,
  title,
  className,
}: {
  shared?: boolean;
  to?: string;
  title?: string;
  className?: string;
}) {
  const history = useHistory();
  function goBackHandler() {
    if (to) {
      return history.push(to);
    }
    if (history.length < 3) {
      return history.replace("/publication");
    }
    return history.goBack();
  }
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        padding-left: 5px;
      `}
    >
      {title && to ? (
        <Link
          to={to}
          className={css`
            font-size: 14px;
            line-height: 1.21;
            margin-right: 10px;
            ${className}
          `}
        >
          {title}
        </Link>
      ) : (
        <button
          onClick={goBackHandler}
          className={css`
            height: 13px;
            font-size: 10px;
            line-height: 1.3;
            text-align: left;
            margin-right: 45px;
            display: flex;
            align-items: center;
          `}
        >
          <Close
            color="#fff"
            className={css`
              margin-right: 8px;
            `}
          />
          <span
            className={css`
              margin-top: 2px;
            `}
          >
            CLOSE
          </span>
        </button>
      )}
      {shared && <BtnShare color="#ececec" />}
    </div>
  );
}
