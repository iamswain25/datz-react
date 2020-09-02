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
    return <Darkroom color={color} className={className} />;
  }
  if (type === "Datz Museum of Art") {
    return <DatzMuseum color={color} className={className} />;
  }
  return <Datzpress color={color} className={className} />;
}
