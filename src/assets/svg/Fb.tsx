import React from "react";
export default function Fb(props: { color?: string; className?: string }) {
  const { color = "#818180;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.58 33.41"
      height="35px"
      className={className}
    >
      <g fill={color}>
        <path d="M9,3a5.41,5.41,0,0,0-3.57,2.3A6.43,6.43,0,0,0,4.34,8.7c0,1.3,0,2.6,0,3.9v.46H0v5H4.34V30.64H9.49V18h4.3c.21-1.68.43-3.32.64-5h-5c0-1.39,0-2.73.14-4.07a1.54,1.54,0,0,1,1.18-1.38,5.11,5.11,0,0,1,1.16-.19c.88,0,1.77,0,2.67,0V3l-1.33-.08A15.65,15.65,0,0,0,9,3Z" />
      </g>
    </svg>
  );
}
