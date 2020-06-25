import React from "react";
export default function Twitter(props: { color?: string; className?: string }) {
  const { color = "#818180;", className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.35 33.41"
      height="35px"
      className={className}
    >
      <g fill={color}>
        <path d="M32.35,6.66c-.9.9-1.79,1.8-2.69,2.68a1.36,1.36,0,0,0-.58,1.12,17.56,17.56,0,0,1-1.18,7,19.75,19.75,0,0,1-3.45,6,18,18,0,0,1-5.94,4.7,16,16,0,0,1-5.75,1.68,26.76,26.76,0,0,1-3.22.2,17.68,17.68,0,0,1-6.75-1.5C1.84,28.14.92,27.65,0,27.14a13.9,13.9,0,0,0,9.72-2.9,6.91,6.91,0,0,1-6.23-4.72H6.37l0-.15a7,7,0,0,1-5.29-6.64L4,13.54l.11-.17A6.64,6.64,0,0,1,1.37,9.25a6.34,6.34,0,0,1,.74-4.83A19.19,19.19,0,0,0,15.92,11.5,6.79,6.79,0,0,1,17.78,5a6.3,6.3,0,0,1,5.06-1.91A6.23,6.23,0,0,1,27,5a.57.57,0,0,0,.69.2c1.26-.47,2.54-.9,3.76-1.33a7.41,7.41,0,0,1-2.6,3.5l1.07-.22c.4-.09.8-.2,1.19-.31s.73-.24,1.09-.36Z" />
      </g>
    </svg>
  );
}
