import React from "react";
import Close from "../assets/svg/Close";
import { css } from "emotion";
import useBtnBack from "./useBtnBack";
import ShareButtons from "./ShareButtons";
export default function PublicationCloseBtn({
  noClose = false,
}: {
  noClose?: boolean;
}) {
  const goBack = useBtnBack();
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
      {!noClose && (
        <button
          onClick={goBack}
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
      )}
      <ShareButtons />
    </div>
  );
}
