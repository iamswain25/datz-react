import React from "react";
import Share from "../assets/svg/Share";
import Twitter from "../assets/svg/Twitter";
import Fb from "../assets/svg/Fb";
import { css } from "emotion";
import { useHistory } from "react-router-dom";
import useDesktop from "./useDesktop";
import Close from "../assets/svg/Close";
export default function PublicationCloseBtn() {
  const isDeskTop = useDesktop();
  const history = useHistory();
  function goBackHandler() {
    console.log(history.length);
    if (history.length < 3) {
      history.replace("/publication");
    }
    history.goBack();
  }
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 20px;
      `}
    >
      <button
        onClick={goBackHandler}
        className={css`
          height: 13px;
          font-size: 10px;
          line-height: 1.3;
          text-align: left;
          color: #ffffff;
          margin-right: 45px;
          display: flex;
          align-items: center;
        `}
      >
        <Close
          color="#ffffff"
          className={css`
            margin-right: 8px;
          `}
        />
        <span>CLOSE</span>
      </button>
      {isDeskTop && (
        <>
          <Share
            color="#ececec"
            className={css`
              height: 15px;
              margin-right: 14px;
            `}
          />
          <Fb
            color="#ececec"
            className={css`
              height: 15px;
              margin-right: 14px;
            `}
          />
          <Twitter
            color="#ececec"
            className={css`
              height: 15px;
            `}
          />
        </>
      )}
    </div>
  );
}
