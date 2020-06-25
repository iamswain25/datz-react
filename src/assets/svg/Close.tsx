import React from "react";
export default function Close(props: { color?: string; className?: string }) {
  const { color = "#818180;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.8 22.8"
      height="12px"
      width="12px"
      className={className}
    >
      <g fill={color}>
        <polygon points="22.8 1.3 21.5 0 11.4 10.1 1.3 0 0 1.3 10.1 11.4 0 21.5 1.3 22.8 11.4 12.7 21.5 22.8 22.8 21.5 12.7 11.4 22.8 1.3" />
      </g>
    </svg>
  );
}
