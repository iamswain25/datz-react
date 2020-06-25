import React from "react";
export default function Search(props: { color?: string; className?: string }) {
  const { color = "#818180;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.88 21.87"
      height="25px"
      width="25px"
      className={className}
    >
      <g fill={color}>
        <path d="M20.77,21.87s0-.05-.07-.07c-1.94-1.95-3.89-3.89-5.84-5.84l-.07-.07A8.92,8.92,0,0,1,6.7,17.68,8.6,8.6,0,0,1,1.53,14,9,9,0,0,1,14.9,2.21a9,9,0,0,1,3,8.39,9,9,0,0,1-2,4.17l.07.08c2,2,3.91,3.91,5.87,5.87a.1.1,0,0,1,.05,0v0l-.14.14-.95.95ZM9,1.56A7.43,7.43,0,1,0,16.43,9,7.44,7.44,0,0,0,9,1.56Z" />
      </g>
    </svg>
  );
}
