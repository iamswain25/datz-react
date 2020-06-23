import React from "react";
import { css } from "emotion";
const headerStyle = css`
  position: absolute;
  z-index: 2;
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  
  text-align: right;
  color: #707070;
`;
export default function Arrow(
  props: React.PropsWithChildren<{
    onClick: any;
    className?: string;
  }>
) {
  return (
    <button
      className={`${headerStyle} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
