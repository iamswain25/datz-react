import React from "react";
export default function Mail(props: { color?: string; className?: string }) {
  const { color = "#818180", className } = props;
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
        <path
          className="cls-1"
          d="M0,6.17H35.22V30.42H0ZM33,9.4c-.27.16-.46.27-.64.39-4.72,3.15-9.43,6.28-14.13,9.44a1,1,0,0,1-1.26,0c-4.7-3.16-9.42-6.29-14.13-9.43-.19-.13-.4-.25-.62-.39V28.18H33Zm-2.64-1H4.91c.13.11.19.18.26.23,4,2.68,8.06,5.36,12.07,8.06.39.27.61.11.9-.08l11.68-7.8Z"
        />
      </g>
    </svg>
  );
}
