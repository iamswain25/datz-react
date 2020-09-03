import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
import { Link } from "react-router-dom";
import DatzBooks from "../assets/svg/DatzBooks";

export default function Logo({
  className,
  type = "D'Ark Room",
  color = "#fff",
  offLink = false,
}: {
  className?: string;
  type?: string;
  color?: string;
  offLink?: boolean;
}) {
  switch (type) {
    case "darkroom":
    case "D'Ark Room": {
      let logo = <Darkroom color={color} className={className} />;
      if (offLink) {
        return logo;
      } else {
        return (
          <a
            href="https://www.instagram.com/d.ark.room/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo}
          </a>
        );
      }
    }
    case "museum":
    case "Datz Museum of Art": {
      let logo = <DatzMuseum color={color} className={className} />;
      if (offLink) {
        return logo;
      } else {
        return (
          <a
            href="https://www.datzmuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo}
          </a>
        );
      }
    }
    case "books":
    case "DatzBooks": {
      let logo = <DatzBooks color={color} className={className} />;
      return logo;
    }
    case "datzpress": {
      let logo = <Datzpress color={color} className={className} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/">{logo}</Link>;
      }
    }
    default: {
      let logo = <Datzpress color={color} className={className} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/">{logo}</Link>;
      }
    }
  }
}
