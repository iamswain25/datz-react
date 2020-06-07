import React from "react";
export default function Share(props: { color?: string; className?: string }) {
  const { color = "#4a4b49;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.22 35.22"
      height="20px"
      className={className}
    >
      <g fill={color}>
        <path d="M27.77,13.34a4.46,4.46,0,0,0-3.19,1.28L13.24,8.07A2.68,2.68,0,0,0,13.4,7,4.7,4.7,0,0,0,8.61,2.17,4.7,4.7,0,0,0,3.82,7a4.71,4.71,0,0,0,4.79,4.79,4.47,4.47,0,0,0,3.2-1.28L23.14,17A2.65,2.65,0,0,0,23,18.13a2.72,2.72,0,0,0,.16,1.12L11.81,26a4.47,4.47,0,0,0-3.2-1.28,4.63,4.63,0,1,0,4.63,4.63,3.12,3.12,0,0,0-.16-1.12l11.34-6.7a4.49,4.49,0,0,0,3.19,1.27A4.7,4.7,0,0,0,32.4,18,4.44,4.44,0,0,0,27.77,13.34Z" />
      </g>
    </svg>
  );
}
