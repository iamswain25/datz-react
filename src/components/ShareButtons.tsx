import React from "react";
import Share from "../assets/svg/Share";
import Twitter from "../assets/svg/Twitter";
import Fb from "../assets/svg/Fb";
import { css } from "emotion";
import CopyToClipboard from "react-copy-to-clipboard";
export default function ShareButtons({ color = "#cccccc" }) {
  function onCopyHandler() {
    window.alert("url copied!");
  }
  return (
    <>
      <CopyToClipboard text={window.location.href} onCopy={onCopyHandler}>
        <button
          className={css`
            margin-right: 16px;
          `}
        >
          <Share
            color={color}
            className={css`
              height: 15px;
            `}
          />
        </button>
      </CopyToClipboard>
      <Fb
        color={color}
        className={css`
          height: 15px;
          margin-right: 17px;
        `}
      />
      <Twitter
        color={color}
        className={css`
          height: 15px;
        `}
      />
    </>
  );
}
