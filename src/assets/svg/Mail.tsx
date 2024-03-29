import React from "react";
export default function Mail(props: { color?: string; className?: string }) {
  const { color = "#818180", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.22 33.41"
      height="35px"
      className={className}
    >
      <g fill={color}>
        <path d="M0,4.58H35.22V28.83H0ZM33,7.81c-.27.16-.46.27-.64.4-4.72,3.14-9.43,6.27-14.13,9.43a.94.94,0,0,1-1.26,0c-4.7-3.16-9.42-6.29-14.13-9.43-.19-.13-.4-.25-.62-.39V26.59H33Zm-2.64-1H4.91a3,3,0,0,0,.26.23c4,2.68,8.06,5.36,12.07,8.06.39.27.61.11.9-.08l11.68-7.8Z" />
      </g>
    </svg>
  );
}
