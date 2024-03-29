import React from "react";
import { css } from "emotion";
const headerStyle = css`
  position: absolute;
  z-index: 2;
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: right;
  color: inherit;
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
