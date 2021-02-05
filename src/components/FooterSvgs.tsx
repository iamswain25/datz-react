import React from "react";
import { css } from "emotion";
import Logo from "./Logo";
import useDesktop from "./useDesktop";
const marginDesktop = "0 28px 0 25px";
const marginMobile = "0 15px 0 12px";
export default function FooterSvgs({ isWhite = false }: { isWhite?: boolean }) {
  const isDesktop = useDesktop();
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <Logo type="datzpress" color={isWhite ? "#fff" : "#404041"} />
      <div
        className={css`
          margin: ${isDesktop ? marginDesktop : marginMobile};
          width: 0;
          height: 29px;
          border-left: solid 1px ${isWhite ? "#fff" : "#707070"};
        `}
      />
      <Logo type="datzbooks" color={isWhite ? "#fff" : "#404041"} />
      <div
        className={css`
          margin: ${isDesktop ? marginDesktop : marginMobile};
          width: 0;
          height: 29px;
          border-left: solid 1px ${isWhite ? "#fff" : "#707070"};
        `}
      />
      <Logo type="darkroom" color={isWhite ? "#fff" : "#404041"} />
      <div
        className={css`
          margin: ${isDesktop ? "0 33px 0 25px" : marginMobile};
          width: 0;
          height: 29px;
          border-left: solid 1px ${isWhite ? "#fff" : "#707070"};
        `}
      />
      <Logo type="datzmuseum" color={isWhite ? "#fff" : "#404041"} />
    </div>
  );
}
