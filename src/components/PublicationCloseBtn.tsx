import React from "react";
import Share from "../assets/svg/Share";
import Twitter from "../assets/svg/Twitter";
import Fb from "../assets/svg/Fb";
import { css } from "emotion";
import { Link } from "react-router-dom";
// import useDesktop from "./useDesktop";
export default function PublicationCloseBtn() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 20px;
        margin-bottom: 20px;
      `}
    >
      <Link
        to="/publication"
        className={css`
          height: 13px;
          font-size: 10px;
          line-height: 1.3;
          text-align: left;
          color: #afafaf;
          margin-right: 45px;
        `}
      >
        X CLOSE
      </Link>
      <Share
        color="#cccccc"
        className={css`
          height: 15px;
          margin-right: 14px;
        `}
      />
      <Fb
        color="#cccccc"
        className={css`
          height: 15px;
          margin-right: 14px;
        `}
      />
      <Twitter
        color="#cccccc"
        className={css`
          height: 15px;
        `}
      />
    </div>
  );
}