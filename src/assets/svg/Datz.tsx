import React from "react";
export default function Datz(props: { color?: string; className?: string }) {
  const { color = "#4a4b4b", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152.29 61.96"
      height="20px"
      width="50px"
      className={className}
    >
      <g fill={color}>
        <path d="M27.68,23.39c.26.09.71-.54.71-1s-.18-10.81-.18-12.68c-.27-2.95-.62-3.21-4.46-4.2C22.85,5.27,22,4.46,22,3.66c0-.27.54-1,2-1.43A97.8,97.8,0,0,1,35.62,0c.8,0,1.07,1.52,1.07,5.45,0,5.62-.35,17.58-.35,24.81,0,18,.26,19.2.35,21.79.09,2.94,1,3.75,1.79,3.75a36.28,36.28,0,0,0,4.73-.63c.45-.09,1.16.72,1.16,1.61a3.26,3.26,0,0,1-2,2.5C36.34,60.53,31.78,62,30.44,62c-.44,0-1.51-.54-1.6-1.07-.18-1-.18-2.77-.27-3.66,0-.18-.36-.36-.72-.18-3.92,2.32-8,4.37-11,4.37C7,61.42,0,54,0,43.83,0,34.19,5.53,29.46,9.91,26.6a26.7,26.7,0,0,1,12.5-3.66A29.9,29.9,0,0,1,27.68,23.39Zm-14.56,6c-2.41,2.14-4,6-4,11.52,0,6.69,4.19,14.91,12,14.91a12.28,12.28,0,0,0,6.43-2.06,4.59,4.59,0,0,0,.89-2.23c.09-5.8,0-10.89,0-16.69a10.22,10.22,0,0,0-.71-3.57A11,11,0,0,0,18.84,27,9,9,0,0,0,13.12,29.37Z" />
        <path d="M74.9,26.6c1.69,1.61,3,5.9,3,7.59,0,3.39-.35,6.88-.35,16.88,0,2.94,1.51,4.28,3.12,4.28a10.18,10.18,0,0,0,3-.71c.26-.18.71.71.71,1.34a9.18,9.18,0,0,1-.8,2.5,8.45,8.45,0,0,1-6.79,3.21c-2.41,0-5.27-.8-6.6-5.45,0-.09-.72-.53-.9-.44A68.71,68.71,0,0,1,62.76,60a10.07,10.07,0,0,1-4.83,1.34c-2.76,0-8.65-3.12-8.65-10.53a7.1,7.1,0,0,1,1.33-4.38,7.91,7.91,0,0,1,3.66-2.5c8.58-2.05,12.95-3.21,15.09-4.28a2,2,0,0,0,1-1.43V34.82a5.82,5.82,0,0,0-.26-2.23c-1.25-3.4-4.82-4.92-7.5-4.92-1.79,0-3.57.81-3.84,1.26s-.72,1.87-.89,4.55a2.81,2.81,0,0,1-.9,1.87,5.1,5.1,0,0,1-2.5.81,15.72,15.72,0,0,1-4.19-.54A2.47,2.47,0,0,1,49.19,34c0-1.6,2.76-4.37,6.6-7,3.39-2.32,7.59-4.11,10.63-4.11A11.32,11.32,0,0,1,74.9,26.6ZM69.18,52.32a6.38,6.38,0,0,0,.72-2.59L70.08,44c0-.35-.45-.53-.72-.53a82.06,82.06,0,0,0-9.1,2.23C57.85,46.6,57,47.58,57,49.82c0,2.76,2.68,5.35,5.81,5.35A9.94,9.94,0,0,0,69.18,52.32Z" />
        <path d="M112.11,23.66c.53,0,1.07.89,1.07,1.43a15.74,15.74,0,0,1,0,2.94c-.18.9-1,1.34-2.05,1.34-3.31,0-7.86.09-9.91.09-.18,0-.63.45-.63,1.34l-.27,16c-.09,4,.36,5.36,1.43,6.61a7.38,7.38,0,0,0,4.64,1.87,14.84,14.84,0,0,0,4-.71,13.38,13.38,0,0,1,2-.54c.36,0,.9.63.9,1.34,0,1.07-.72,2-2.41,3.39-2.68,2.15-6.88,2.77-9.11,2.77a10.11,10.11,0,0,1-8.21-4.2c-.72-1.07-1.25-3.12-1.25-6.33,0-6.25.44-11.52.44-20,0-1-.26-1.07-2.67-1.52a4,4,0,0,1-2.68-2.59c0-.45,1-1.25,1.87-1.87,1.7-1.34,5.09-3.57,6.79-5.63a5.87,5.87,0,0,1,3.75-2.23c.35,0,.89.89.89,1.34,0,1-.09,4-.09,4.55,0,.36.18,1,.8,1C102.38,24,110.05,23.66,112.11,23.66Z" />
        <path d="M147.94,23.66a1.19,1.19,0,0,1,.89.35,2.43,2.43,0,0,1,.45,1.88c-.71,1-2.05,2.86-4.82,7-3.39,5.36-11,17.86-13,21.88,0,0-.09.8.17,1,1.52,1.16,4.65,1.34,8.48,1.34,1.17,0,4-1.07,7.95-5.36,1.25-1.34,2.32-2.32,3.3-2.32.45,0,1.16,1.34.9,2.32-.63,1.61-1.61,5-2.41,7.32a3.75,3.75,0,0,1-1.61,1.61c-6.88,0-8.84-.27-15.71-.27-4.11,0-10.27.45-11.34.45-.81,0-1.61-1.25-1.61-1.88s1.88-3.21,3.39-5.35c2.06-3,11.25-18.31,14.91-24.73a.61.61,0,0,0-.26-.9c-1.25-.35-3.4-.53-9.29-.53-2,.09-3.66,1.6-6.25,4.73a4.8,4.8,0,0,1-2,1.52,1.54,1.54,0,0,1-1.34-1.52c0-1.34.89-3.21,1.34-4.64a26.19,26.19,0,0,0,1.16-3.84,2.35,2.35,0,0,1,1.25-1.61.69.69,0,0,1,.89.18A7.93,7.93,0,0,0,128,23.75c1,.09,5.36.35,10.18.26C142,23.93,146.78,23.66,147.94,23.66Z" />
      </g>
    </svg>
  );
}
