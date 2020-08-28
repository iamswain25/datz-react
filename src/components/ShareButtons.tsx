import React from "react";
import Share from "../assets/svg/Share";
import Twitter from "../assets/svg/Twitter";
import Fb from "../assets/svg/Fb";
import { css } from "emotion";
export default function ShareButtons({ color = "#cccccc" }) {
  return (
    <>
      <Share
        color={color}
        className={css`
          height: 15px;
          margin-right: 16px;
        `}
      />
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
