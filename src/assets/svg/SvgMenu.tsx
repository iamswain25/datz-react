import React from "react";
export default function SvgMenu(props: { color?: string; className?: string }) {
  const { color = "#707070;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.8 14.37"
      height="15px"
      width="18px"
      className={className}
    >
      <g fill={color}>
        <rect width="22.8" height="2" />
        <rect y="12.37" width="22.8" height="2" />
      </g>
    </svg>
  );
}
