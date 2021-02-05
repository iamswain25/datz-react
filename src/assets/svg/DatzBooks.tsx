import React from "react";
import useDesktop from "../../components/useDesktop";
export default function DatzBooks(props: {
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
      viewBox="0 6 272.2 117.07"
      width={isDesktop ? 62 : 48}
      height={isDesktop ? 32 : 24}
      className={className}
    >
      <g fill={color}>
        <path d="M93.39,91.34l-2.46,1.22a.61.61,0,0,0,0,1.15,13.41,13.41,0,0,1,5,2.9,9.66,9.66,0,0,1,3.07,7,12,12,0,0,1-5.53,9.84c-3.34,2.11-7.82,2.72-12.21,2.72-5.27,0-8.34-.44-9.75-.44-2.28,0-4.22.27-7.11.27-1.85,0-2.81-.71-2.81-1.59,0-1.14,1.75-1.49,2.81-1.75,3.6-.88,4-2.11,4.12-3a109.34,109.34,0,0,0,.71-14.93,111.55,111.55,0,0,0-.53-12.12c-.35-2.37-.7-2.81-4.83-3.6-1.32-.26-2.11-.62-2.11-1.58,0-.62.88-1.41,2.46-1.41h1.85c3.16,0,7.9-.52,16.07-.52,4.48,0,7.73.7,10.1,2.28a9,9,0,0,1,4.3,7A7.4,7.4,0,0,1,93.39,91.34Zm-16.6-12a2.61,2.61,0,0,0-.61,1.85c0,2.46.17,6.5.17,10.54,0,.61,1,1.31,1.58,1.31s5.45-.08,7.82-1.14,3.07-3.25,3.07-5.44a7.32,7.32,0,0,0-2.19-5.71c-1.41-1.23-3.87-2-7.12-2A5.19,5.19,0,0,0,76.79,79.3Zm11.15,19C86.1,96.78,83.73,96,79.86,96c-1.93,0-3.42.18-3.51,1.23v10.45a4.69,4.69,0,0,0,1.58,3.87,10.28,10.28,0,0,0,4.39,1.58,10.59,10.59,0,0,0,4.83-1.67A8.49,8.49,0,0,0,91,104.77,8,8,0,0,0,87.94,98.27Z" />
        <path d="M147.23,95.81a20.4,20.4,0,0,1-7.82,16.34,24.62,24.62,0,0,1-13.52,4.92,23,23,0,0,1-16.34-6.59A21,21,0,0,1,104,96a20.23,20.23,0,0,1,8.52-16.77,21.82,21.82,0,0,1,13.26-4.4C137.48,74.82,147.23,83.61,147.23,95.81Zm-30.74-14c-2.55,2.55-3.78,7.47-3.78,13.44,0,4.48,1.58,9.93,4.39,13.35a13.21,13.21,0,0,0,9.84,4.83,10.4,10.4,0,0,0,7.11-2.55c2.73-2.28,4.48-7.9,4.48-14.4,0-8.08-3.86-18.27-14.31-18.27A11.73,11.73,0,0,0,116.49,81.76Z" />
        <path d="M194.13,95.81a20.4,20.4,0,0,1-7.82,16.34,24.62,24.62,0,0,1-13.53,4.92,23,23,0,0,1-16.33-6.59A21,21,0,0,1,150.91,96a20.25,20.25,0,0,1,8.52-16.77,21.87,21.87,0,0,1,13.27-4.4C184.38,74.82,194.13,83.61,194.13,95.81Zm-30.74-14c-2.55,2.55-3.78,7.47-3.78,13.44,0,4.48,1.58,9.93,4.39,13.35a13.21,13.21,0,0,0,9.84,4.83,10.4,10.4,0,0,0,7.11-2.55c2.72-2.28,4.48-7.9,4.48-14.4,0-8.08-3.86-18.27-14.31-18.27A11.71,11.71,0,0,0,163.39,81.76Z" />
        <path d="M229.26,115.75c-1.32,0-4.31.18-5,.18-1.58,0-2.37-.7-2.37-1.23,0-.79.61-1.41,1.58-1.85,2-1,1.76-1.58,1-2.46-3.07-3.6-8.78-10.18-12.47-14.14-1-1.23-1.58-.7-1.58-.35,0,1.93-.17,10-.17,12.12,0,3,.7,3.6,4,4.66,1,.26,2.28.88,2.28,1.67,0,1.05-1.32,1.67-2.37,1.67-1.49,0-4.48-.27-8-.27-2.29,0-5.54.27-6.94.27s-2.72-.71-2.72-1.41c0-1,1-1.49,2.46-1.93,3.51-1.06,3.95-1.67,4.12-4.66.27-4.3.36-22,.36-24.68s-1-3.33-4-4.3c-1.58-.53-2.37-1.05-2.37-1.84s1-1.41,2.64-1.41c1.93,0,4.12.35,7.11.35,2.46,0,6.24-.35,7.47-.35,1.75,0,2.37.44,2.37,1.41,0,.79-1.41,1.49-2.55,1.93-2.37.7-3.16,1.67-3.25,3.07-.09,2.72-.44,5.45-.44,9.4,0,1.05.35,1.58.62,1.58.87,0,2-.79,4-2.55A120.17,120.17,0,0,0,225.22,81c.7-.7.35-1.32-1.58-1.84A2.1,2.1,0,0,1,222,77.28c0-.79,1.31-1.23,2-1.23,1,0,2.72.09,3.42.09,4,.09,7.82-.53,10.72-.53,1.58,0,2.46,1,2.46,1.67,0,1-1.67,1.41-2.81,1.58-4.48,1-6.59,2.64-9.14,4.48a78.46,78.46,0,0,0-10.19,8.44c-.26.17-.17.78,0,1,2.29,2.81,8,9.75,11.77,13.7,3.34,3.6,4.83,4.92,9.75,6.32,1.5.44,2.37,1.41,2.37,2.11,0,1-1.05,1.23-2.63,1.23C238,116.19,232.33,115.75,229.26,115.75Z" />
        <path d="M269.39,76.4a2.69,2.69,0,0,1,1,1.85c.09,1.93.61,4.57.53,6.41,0,1-.53,2.37-1.5,2.37s-1.49-1.23-1.84-2.19a13,13,0,0,0-2.64-4.48,8.46,8.46,0,0,0-6.06-2.29,6.13,6.13,0,0,0-6.5,6.06c0,3.43,2.64,5.36,5.1,6.68,2.9,1.58,5.27,2.63,8,4.21,3.69,2.2,6.76,5.36,6.76,10a11,11,0,0,1-4.65,8.95,19.49,19.49,0,0,1-10.81,3.08,29.94,29.94,0,0,1-10.18-1.84,2.84,2.84,0,0,1-1.67-1.67c-.27-1.41-1.14-7-1.14-7.82s.52-2,1.49-2c.79,0,1.49,1,4,5,2.11,3.33,5.53,5.09,8,5.09,5.1,0,7.47-3.25,7.47-6.41,0-2.46-1.14-4.31-4.48-6.24l-8.17-4.56c-2.9-1.59-6.5-5.1-6.5-10.37a10.15,10.15,0,0,1,5.71-9.31,17.55,17.55,0,0,1,8.61-2.11A37.59,37.59,0,0,1,269.39,76.4Z" />
        <path d="M28,23.84c.36.09.72-.45.72-1s-.18-11.51-.18-13.4c-.27-3-.63-3.24-4.59-4.23a2.29,2.29,0,0,1-1.71-1.89c0-.27.36-.72,1.89-1.17A111.62,111.62,0,0,1,35.18,0c.9,0,1.17,1.35,1.17,5.49,0,5.67-.36,18-.36,25.28,0,18.08.27,19.61.36,22.22.09,2.88.9,3.6,1.62,3.6a37.48,37.48,0,0,0,5-.54c.54-.09,1.26.54,1.26,1.53a3.3,3.3,0,0,1-2,2.43C36,61.36,32.12,62.62,30.77,62.62c-.45,0-1.53-.54-1.62-1.17-.18-1-.18-2.79-.27-3.69,0-.18-.45-.36-.72-.18-4.14,2.34-8.1,4.5-11.07,4.5C6.93,62.08,0,54.61,0,44.45,0,34.73,5.58,29.87,10,27a26.37,26.37,0,0,1,12.5-3.6A25.26,25.26,0,0,1,28,23.84ZM12.6,29.78c-2.43,2.16-4.23,6.12-4.23,11.7,0,6.92,4.41,15.2,12.41,15.2,2.7,0,6.21-1.44,7-2.25a4.72,4.72,0,0,0,.9-2.25c.09-5.85,0-11.06,0-16.91A10.58,10.58,0,0,0,28,31.76a11,11,0,0,0-9.27-4.5A9.2,9.2,0,0,0,12.6,29.78Z" />
        <path d="M74.54,26.81c1.8,1.62,3.06,5.85,3.06,7.74,0,3.42-.36,7.2-.36,17.27,0,3,1.53,4.41,3.24,4.41a9.6,9.6,0,0,0,3-.81c.36-.18.81.72.81,1.44a10.28,10.28,0,0,1-.81,2.34A7.93,7.93,0,0,1,77,62.44c-2.34,0-5.22-.9-6.39-5.58,0-.09-.72-.54-.9-.45a68.6,68.6,0,0,1-6.93,4.32A9.61,9.61,0,0,1,58,62.08c-2.7,0-8.54-3.33-8.54-10.62a6.78,6.78,0,0,1,1.35-4.32,8.48,8.48,0,0,1,3.59-2.61c9.09-2.15,13.32-3.23,15.3-4.31a1.73,1.73,0,0,0,1-1.35V35.45a6.44,6.44,0,0,0-.27-2.34c-1.26-3.51-5.13-5-7.92-5a7.39,7.39,0,0,0-4,1.17c-.36.45-.72,1.71-.9,4.41a2.91,2.91,0,0,1-.81,2,6.66,6.66,0,0,1-2.61.72,13.91,13.91,0,0,1-3.77-.45,2.39,2.39,0,0,1-1.08-1.44c0-1.53,2.61-4.32,6.47-7,3.42-2.25,7.56-4.05,10.62-4.05A10.89,10.89,0,0,1,74.54,26.81ZM69.59,53a8.94,8.94,0,0,0,.72-2.7l.09-5.76c0-.36-.45-.54-.72-.54a91.62,91.62,0,0,0-9.63,2.34c-2.52.9-3.33,1.89-3.33,4.14a6,6,0,0,0,6,5.58A11.11,11.11,0,0,0,69.59,53Z" />
        <path d="M112.14,24.11c.63,0,1.08,1,1.17,1.53a25.42,25.42,0,0,1-.09,2.88c-.27,1-1.08,1.17-2.07,1.17-3.33,0-8.1.09-10.17.09-.18,0-.63.36-.63,1.35l-.27,16.37c-.09,4,.27,5.49,1.35,6.75a8.27,8.27,0,0,0,4.86,2,14.7,14.7,0,0,0,4.14-.81,13.53,13.53,0,0,1,2-.54c.36,0,.81.63.81,1.35,0,1-.72,2.07-2.16,3.15a16.5,16.5,0,0,1-9.18,2.79A10.11,10.11,0,0,1,94,58c-.72-1.08-1.26-3.15-1.26-6.39,0-6.3.45-11.78.45-20.33,0-1-.27-1.08-2.79-1.44a4.06,4.06,0,0,1-2.7-2.61c0-.36,1.08-1.17,1.89-1.89C91.08,24.11,94.41,22,96,20a5.92,5.92,0,0,1,3.6-2.34c.36,0,.81.9.81,1.35,0,1-.09,3.87-.09,4.41,0,.36.09,1.08.72,1.08C102.06,24.47,110.07,24.11,112.14,24.11Z" />
        <path d="M147.85,24.11a1.2,1.2,0,0,1,.9.36,2.06,2.06,0,0,1,.54,1.53l-4.86,7.11c-3.33,5-11.34,18.26-13.5,22.31,0,0-.18.81.09,1,1.62,1.26,4.95,1.35,9.18,1.35,1.17,0,3.87-.9,7.92-5.22,1.26-1.35,2.33-2.34,3.32-2.34.45,0,1.08,1.35.81,2.16-.63,1.71-1.53,5-2.42,7.29a3.7,3.7,0,0,1-1.53,1.62c-6.93,0-8.82-.27-15.75-.27-4.14,0-10.08.45-11.16.45-.81,0-1.53-1.26-1.53-1.8s1.71-3.15,3.24-5.31C125,51.64,134.62,36,138.49,29.15a.59.59,0,0,0-.18-.9c-1.17-.36-3.15-.54-9.9-.45-2.25,0-3.69,1.44-6.3,4.59a4.29,4.29,0,0,1-2,1.53c-.72,0-1.16-.9-1.16-1.53,0-1.35.89-3.15,1.34-4.59a21.74,21.74,0,0,0,1.08-3.69,2.51,2.51,0,0,1,1.35-1.62c.36-.18.54-.09.9.09a6.2,6.2,0,0,0,4.5,1.62c1,.09,5,.36,10.08.27C142.27,24.38,146.68,24.11,147.85,24.11Z" />
      </g>
    </svg>
  );
}
