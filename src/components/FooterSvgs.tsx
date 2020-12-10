import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
export default function FooterSvgs() {
  const isDesktop = useDesktop();
  return (
    <>
      <Logo
        type="datzpress"
        color="#404041"
        className={
          isDesktop
            ? undefined
            : css`
                height: 15px;
              `
        }
      />
      <div
        className={css`
          margin: ${isDesktop ? "0 28px 0 25px" : "0 10px"};
          width: 0;
          height: ${isDesktop ? "29px" : "15px"};
          border-left: solid 1px #707070;
        `}
      />
      <Logo
        type="darkroom"
        color="#404041"
        className={
          isDesktop
            ? undefined
            : css`
                height: 15px;
              `
        }
      />
      <div
        className={css`
          margin: ${isDesktop ? "0 33px 0 25px" : "0 10px"};
          width: 0;
          height: ${isDesktop ? "29px" : "15px"};
          border-left: solid 1px #707070;
        `}
      />
      <Logo
        type="museum"
        color="#404041"
        className={
          isDesktop
            ? undefined
            : css`
                height: 15px;
              `
        }
      />
    </>
  );
}
