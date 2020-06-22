import React from "react";
export default function Search(props: { color?: string; className?: string }) {
  const { color = "#4a4b49;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.22 35.22"
      height="25px"
      width="25px"
      className={className}
    >
      <g fill={color}>
        <path d="M27.44,28.55l-.07-.08-5.84-5.84a.46.46,0,0,1-.07-.07,8.92,8.92,0,0,1-8.09,1.8A8.64,8.64,0,0,1,8.2,20.67a9,9,0,1,1,16-8,8.89,8.89,0,0,1,.37,4.6,9,9,0,0,1-2,4.16l.07.08,5.87,5.87.05,0v0a1.85,1.85,0,0,0-.14.14l-.95,1ZM15.68,8.24a7.43,7.43,0,1,0,7.42,7.43A7.43,7.43,0,0,0,15.68,8.24Z" />
      </g>
    </svg>
  );
}