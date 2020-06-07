import React from "react";
export default function Fb(props: { color?: string; className?: string }) {
  const { color = "#4a4b49;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.22 35.22"
      height="35px"
      className={className}
    >
      <g fill={color}>
        <path d="M19.29,4.31a5.42,5.42,0,0,0-3.56,2.3,6.43,6.43,0,0,0-1.07,3.44c0,1.3,0,2.6,0,3.9v.46H10.32v5h4.34V32H19.8V19.39h4.31c.21-1.68.42-3.32.64-5h-5c0-1.39,0-2.73.14-4.07a1.53,1.53,0,0,1,1.18-1.38,5.11,5.11,0,0,1,1.16-.19c.88,0,1.76,0,2.67,0V4.3l-1.33-.08A15.73,15.73,0,0,0,19.29,4.31Z" />
      </g>
    </svg>
  );
}
