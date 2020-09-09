import React from "react";
import Close from "../assets/svg/Close";
import { css } from "emotion";
import { useHistory } from "react-router-dom";
import ShareButtons from "./ShareButtons";
import useBtnBack from "./useBtnBack";
export default function CloseShare({ close = "" }) {
  const goBack = useBtnBack();
  const history = useHistory();
  function handler() {
    if (close) history.push(close);
    else goBack();
  }
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
      <button
        onClick={handler}
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
      </button>
      <ShareButtons />
    </div>
  );
}
