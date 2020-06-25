import React from "react";
export default function Share(props: { color?: string; className?: string }) {
  const { color = "#818180;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.58 33.41"
      height="20px"
      className={className}
    >
      <g fill={color}>
        <path d="M24,12a4.44,4.44,0,0,0-3.19,1.28L9.42,6.72a2.7,2.7,0,0,0,.16-1.11A4.7,4.7,0,0,0,4.79.82,4.7,4.7,0,0,0,0,5.61,4.71,4.71,0,0,0,4.79,10.4,4.43,4.43,0,0,0,8,9.12l11.34,6.54a2.72,2.72,0,0,0-.16,1.12,2.72,2.72,0,0,0,.16,1.12L8,24.61a4.43,4.43,0,0,0-3.19-1.28A4.63,4.63,0,1,0,9.42,28a3.12,3.12,0,0,0-.16-1.12l11.34-6.7a4.48,4.48,0,0,0,3.19,1.27,4.7,4.7,0,0,0,4.79-4.79A4.44,4.44,0,0,0,24,12Z" />
      </g>
    </svg>
  );
}
