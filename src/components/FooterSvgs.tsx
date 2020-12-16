import React from "react";
import { css } from "emotion";
import Logo from "./Logo";
export default function FooterSvgs() {
  return (
    <>
      <Logo type="datzpress" color="#404041" />
      <div
        className={css`
          margin: 0 28px 0 25px;
          width: 0;
          height: 29px;
          border-left: solid 1px #707070;
        `}
      />
      <Logo type="darkroom" color="#404041" />
      <div
        className={css`
          margin: 0 33px 0 25px;
          width: 0;
          height: 29px;
          border-left: solid 1px #707070;
        `}
      />
      <Logo type="museum" color="#404041" />
    </>
  );
}
