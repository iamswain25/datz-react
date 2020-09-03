import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";

export default function Logo({
  className,
  type = "D'Ark Room",
  color = "#fff",
}: {
  className?: string;
  type?: string;
  color?: string;
}) {
  if (type === "D'Ark Room") {
    return (
      <a
        href="https://www.instagram.com/d.ark.room/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Darkroom color={color} className={className} />
      </a>
    );
  }
  if (type === "Datz Museum of Art") {
    return (
      <a
        href="https://www.datzmuseum.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DatzMuseum color={color} className={className} />
      </a>
    );
  }
  return (
    <a
      href="https://www.datzpress.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Datzpress color={color} className={className} />
    </a>
  );
}
