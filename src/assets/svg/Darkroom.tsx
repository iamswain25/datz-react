import React from "react";
import useDesktop from "../../components/useDesktop";
export default function Darkroom(props: {
  color?: string;
  className?: string;
}) {
  const { color = "#404041", className } = props;
  const isDesktop = useDesktop();
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258.5 117.3"
      width={isDesktop ? 58.02 : 44.31}
      className={className}
    >
      <g fill={color}>
        <path
          className="cls-1"
          d="M17.1,62.65c3,0,6.92-2.16,11.06-4.49.27-.18.72,0,.72.18.09.9.09,2.69.27,3.68.09.63,1.17,1.17,1.62,1.17,1.35,0,5.22-1.26,11.43-2.61a3.29,3.29,0,0,0,2-2.42c0-1-.72-1.62-1.26-1.53a37.48,37.48,0,0,1-5,.54c-.72,0-1.53-.72-1.62-3.6C36.26,51,36,49.43,36,31.34c0-7.29.36-19.61.36-25.28,0-4.14-.27-5.49-1.17-5.49A111.62,111.62,0,0,0,24.11,2.73c-1.53.45-1.89.9-1.89,1.17a2.29,2.29,0,0,0,1.71,1.89c4,1,4.32,1.26,4.59,4.23,0,1.89.18,12.86.18,13.4s-.36,1.08-.72,1A25.26,25.26,0,0,0,22.49,24,26.4,26.4,0,0,0,10,27.56C5.58,30.44,0,35.3,0,45,0,55.19,6.93,62.65,17.1,62.65Zm-4.5-32.3a9.23,9.23,0,0,1,6.12-2.52A10.94,10.94,0,0,1,28,32.33a10.58,10.58,0,0,1,.72,3.51c0,5.85.09,11.07,0,16.92A4.72,4.72,0,0,1,27.8,55c-.81.81-4.32,2.25-7,2.25-8,0-12.41-8.28-12.41-15.21C8.37,36.47,10.17,32.51,12.6,30.35Z"
        />
        <path
          className="cls-1"
          d="M50.3,19c0,.18.19.27.46.27.55,0,8.67-3.93,8.67-11C59.43,3.52,54.07,0,53.34,0s-5.45,4.33-5.45,5.06c0,.37,1.16,1.26,1.92,1.87s4.11,2.81,4,5.27a9.05,9.05,0,0,1-2.55,5.29A3.1,3.1,0,0,0,50.3,19Z"
        />
        <path
          className="cls-1"
          d="M85.36,22c.18,1.63,1.09,3.71,2.44,7.32,1.9,5.34,7.78,19.71,9.49,24.14,1.9,4.52,3.35,5.24,6.6,6.42,1.72.63,2.17,1,2.17,1.54s-.9,1.71-2.8,1.71c-2.71,0-5.6-.45-8.41-.45-3,0-4.7.18-6.69.18-1.44,0-2.26-.72-2.26-1.35s.64-1.36,2-1.81c2.17-.82,2.53-1.18,2.26-2.81-.54-1.8-2.17-6.14-2.44-6.69A2,2,0,0,0,86.08,49c-1-.09-3.43,0-5.78-.09a57.78,57.78,0,0,0-6.15.18,2.4,2.4,0,0,0-1.45,1,29.58,29.58,0,0,0-2.16,6.24c-.46,2.35.27,2.53,2.16,3.17,1.27.45,2.26.9,2.26,2s-1.08,1.35-2.62,1.35c-.72,0-1.44-.18-4.16-.18-2.44,0-5.33.45-7.86.45-1.27,0-2.71-.36-2.71-1.35,0-.73.9-1.36,2.26-1.81,2.89-1.09,4.7-2.08,6.24-5.52,3-5.78,7-16.54,11.11-25.76a21.28,21.28,0,0,0,1.18-3.44,10.8,10.8,0,0,1,1.54-2.08l2.26-1.8A4.67,4.67,0,0,1,84,20.51,1.63,1.63,0,0,1,85.36,22ZM80,31c-1.27,2.8-3.8,9.31-4.88,12.66-.09.18.63,1,.72,1a32.25,32.25,0,0,0,4.52.09,34.36,34.36,0,0,0,4.7-.18s.54-.63.45-1c-.27-1.36-4.25-11.85-4.61-12.75C80.75,30.28,80.12,30.82,80,31Z"
        />
        <path
          className="cls-1"
          d="M135.35,57.58c-1.62-2.35-4.88-8.32-6.32-10.76-1.36-2.08-3.17-2.89-6.24-2.89A1.56,1.56,0,0,0,121.52,45a76.64,76.64,0,0,0,.36,10.67c.28,2.44,1.54,2.89,4.89,4,1.62.54,2.08,1.53,2.08,2.26s-.82,1.17-2.72,1.17-6.42-.45-9.49-.45c-2.53,0-4.25.27-6.42.27s-2.71-1.17-2.71-1.81.54-1.08,2.44-1.71c3.44-1.27,3.62-2,3.8-3.89s.36-8.77.36-16c0-8.41,0-9.22-.18-11.21-.09-1.45-.63-2.17-4.25-3.17-1.08-.27-2.53-1.08-2.53-2.26,0-.72,1.17-1.17,2.44-1.17.9,0,3.07-.09,5.51-.09,3.53,0,6.6-.45,10.94-.45,6.6,0,10.13,1.08,13,3.34a9.52,9.52,0,0,1,3.35,7.68c0,3.35-1.27,6.06-3.53,7.42-.45.36-2.53,1.44-3.25,1.81-.28.18-.18.72-.09.9a69.16,69.16,0,0,0,7.59,12.84,15.27,15.27,0,0,0,8,5c1.27.36,1.72,1,1.72,1.36s-.54,1.08-1.62,1.44a18.43,18.43,0,0,1-4.53.45A12.81,12.81,0,0,1,135.35,57.58ZM122,25.48a3,3,0,0,0-.55,1.72c0,1.63-.27,11.21.36,12.75,0,.09.64,1,1.09,1a23.35,23.35,0,0,0,9-1.71,7,7,0,0,0,2.71-5.88c0-3.8-2.89-9-9.76-9A6.67,6.67,0,0,0,122,25.48Z"
        />
        <path
          className="cls-1"
          d="M185.35,62.64c-1.36,0-4.43.18-5.16.18-1.62,0-2.44-.72-2.44-1.26,0-.82.64-1.45,1.63-1.9,2.08-1,1.81-1.63,1.09-2.53-3.17-3.71-9-10.49-12.84-14.56-1.09-1.26-1.63-.72-1.63-.36,0,2-.18,10.3-.18,12.47,0,3.08.72,3.71,4.07,4.8,1.08.27,2.35.9,2.35,1.71,0,1.09-1.36,1.72-2.44,1.72-1.54,0-4.61-.27-8.23-.27-2.35,0-5.69.27-7.14.27s-2.8-.72-2.8-1.44c0-1.09,1-1.54,2.53-2,3.61-1.09,4.07-1.72,4.25-4.8.27-4.43.36-22.69.36-25.4s-1-3.43-4.07-4.43c-1.63-.54-2.44-1.08-2.44-1.9s1-1.44,2.71-1.44c2,0,4.25.36,7.32.36,2.54,0,6.42-.36,7.69-.36,1.81,0,2.44.45,2.44,1.44,0,.82-1.45,1.54-2.62,2-2.44.73-3.26,1.72-3.35,3.17-.09,2.8-.45,5.6-.45,9.67,0,1.08.36,1.63.63,1.63.91,0,2.08-.82,4.16-2.63,2.71-2.35,8.41-7.5,10.4-9.94.72-.72.36-1.36-1.63-1.9a2.16,2.16,0,0,1-1.72-1.9c0-.81,1.36-1.26,2.08-1.26,1.09,0,2.81.09,3.53.09,4.16.09,8.05-.54,11-.54,1.63,0,2.53,1,2.53,1.71,0,1-1.72,1.45-2.89,1.63-4.61,1-6.78,2.71-9.41,4.61A80.2,80.2,0,0,0,174.23,38c-.27.18-.18.81,0,1.08,2.35,2.9,8.22,10,12.11,14.11,3.44,3.7,5,5.06,10,6.51,1.53.45,2.44,1.44,2.44,2.17,0,1-1.09,1.26-2.71,1.26C194.3,63.09,188.51,62.64,185.35,62.64Z"
        />
        <path
          className="cls-1"
          d="M91,110.94c-1.61-2.33-4.84-8.24-6.27-10.66-1.34-2.06-3.14-2.87-6.18-2.87a1.54,1.54,0,0,0-1.26,1.08,76.83,76.83,0,0,0,.36,10.57c.27,2.42,1.53,2.87,4.84,3.94,1.61.54,2.06,1.52,2.06,2.24s-.81,1.16-2.69,1.16-6.36-.44-9.4-.44c-2.51,0-4.21.27-6.36.27s-2.69-1.17-2.69-1.8.54-1.07,2.42-1.7c3.4-1.25,3.58-2,3.76-3.85S70,100.19,70,93c0-8.33,0-9.13-.18-11.1-.09-1.44-.63-2.15-4.21-3.14-1.08-.27-2.51-1.07-2.51-2.24,0-.71,1.17-1.16,2.42-1.16.9,0,3-.09,5.46-.09,3.5,0,6.54-.45,10.84-.45,6.54,0,10,1.08,12.9,3.31A9.45,9.45,0,0,1,98,85.77c0,3.31-1.26,6-3.5,7.34a35.7,35.7,0,0,1-3.22,1.8c-.27.18-.18.71-.09.89a68.75,68.75,0,0,0,7.52,12.72,15.17,15.17,0,0,0,7.89,4.93c1.25.36,1.7,1,1.7,1.34s-.54,1.08-1.61,1.44a18.57,18.57,0,0,1-4.48.44A12.67,12.67,0,0,1,91,110.94ZM77.77,79.14a3,3,0,0,0-.54,1.7c0,1.61-.26,11.11.36,12.63,0,.09.63,1,1.08,1a23.27,23.27,0,0,0,8.87-1.7,7,7,0,0,0,2.68-5.83c0-3.76-2.86-8.86-9.67-8.86A6.62,6.62,0,0,0,77.77,79.14Z"
        />
        <path
          className="cls-1"
          d="M150.44,95.62a20.82,20.82,0,0,1-8,16.66,25.1,25.1,0,0,1-13.8,5A23.47,23.47,0,0,1,112,110.58a21.41,21.41,0,0,1-5.64-14.78,20.66,20.66,0,0,1,8.69-17.11,22.31,22.31,0,0,1,13.52-4.48C140.5,74.21,150.44,83.17,150.44,95.62ZM119.09,81.29c-2.6,2.6-3.85,7.61-3.85,13.71,0,4.56,1.61,10.12,4.47,13.61a13.45,13.45,0,0,0,10,4.93,10.63,10.63,0,0,0,7.25-2.6c2.78-2.33,4.57-8.06,4.57-14.69,0-8.24-3.94-18.63-14.6-18.63A12,12,0,0,0,119.09,81.29Z"
        />
        <path
          className="cls-1"
          d="M199.17,95.62a20.79,20.79,0,0,1-8,16.66,25.07,25.07,0,0,1-13.8,5,23.49,23.49,0,0,1-16.66-6.72A21.41,21.41,0,0,1,155.1,95.8a20.66,20.66,0,0,1,8.69-17.11,22.34,22.34,0,0,1,13.53-4.48C189.23,74.21,199.17,83.17,199.17,95.62ZM167.82,81.29C165.22,83.89,164,88.9,164,95c0,4.56,1.61,10.12,4.48,13.61a13.43,13.43,0,0,0,10,4.93,10.64,10.64,0,0,0,7.26-2.6c2.77-2.33,4.56-8.06,4.56-14.69,0-8.24-3.94-18.63-14.6-18.63A12,12,0,0,0,167.82,81.29Z"
        />
        <path
          className="cls-1"
          d="M204,75.11c2.06,0,8,.36,10.39.36a2.22,2.22,0,0,1,1.79,1.25,66.61,66.61,0,0,0,2.69,6.18c2.6,5.73,7.43,14.24,10.39,20.07.36.8.81.36,1,.09,1.25-1.7,8.51-17.11,10.3-21a49.26,49.26,0,0,0,2.06-5.2c.27-.63,1.07-1.34,1.52-1.34,2.15,0,8.87-.45,10-.45,1.53,0,2.69.81,2.69,1.7s-.9,1.35-2.87,1.7c-3.58.72-4.56.9-4.56,3.5,0,5.28.71,23.47,1.25,26.87.27,1.88,2,3,5.37,4,2.15.63,2.42,1.17,2.42,2.06,0,.54-1.16,1.43-2.77,1.43-3.32,0-6.1-.35-8.87-.35-2.51,0-4.66.27-6.18.27s-2.78-.63-2.78-1.62,1.43-1.79,2.42-2.24a4.32,4.32,0,0,0,2.6-2.42c.18-2.59.09-20-.27-22.84-.09-.45-.45-1-.9-.27-7.7,17-8.87,19.08-11.11,25.09-1,2.59-2.68,4.3-3.49,4.3s-1.7-.63-2.6-3.5c-1.79-6-5.82-13.44-10.57-24.63a.45.45,0,0,0-.89.09c-.81,4.21-1.26,14.78-1.08,19,.18,4,2,4.3,4.66,5.73,1.34.81,1.79,1.25,1.79,1.88,0,.81-.54,1.44-2.24,1.44-1.88,0-4-.27-6.09-.27-1.88,0-7.17.44-9,.44-1.07,0-2.42-.53-2.42-1.61,0-.8,1.08-1.34,2.69-1.79,3.41-1,5.2-2.24,5.82-5.64.72-4.3,2.15-18.73,2.6-23.74.36-4-1.79-3.94-5.28-4.93-1.79-.45-2.69-1.52-2.69-2.69C201.89,75.29,203.14,75.11,204,75.11Z"
        />
      </g>
    </svg>
  );
}
