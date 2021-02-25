import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
import { Link } from "react-router-dom";
import DatzBooks from "../assets/svg/DatzBooks";
import Cultural from "../assets/svg/Cultural";
import clsx from "clsx";
import useDesktop from "./useDesktop";
import { css } from "emotion";

const absoluteClass = (isDesktop: boolean, noPadding: boolean = false) => css`
  bottom: ${isDesktop ? 29 : 25}px;
  left: ${isDesktop ? 32 : 23}px;
  position: absolute;
  padding: ${noPadding ? 0 : isDesktop ? 37 : 20}px;
`;

const negativeLeftPadding = css`
  margin-left: -15px;
`;

export default function Logo({
  className,
  type,
  color = "#fff",
  offLink = false,
  noPadding = false,
  absolute = false,
}: {
  className?: string;
  type?: string;
  color?: string;
  offLink?: boolean;
  noPadding?: boolean;
  absolute?: boolean;
}) {
  const isDesktop = useDesktop();
  let className2 = className;
  if (absolute) {
    className2 = clsx(className, absoluteClass(isDesktop, noPadding));
  }
  className2 = clsx(className2, negativeLeftPadding);

  switch (type) {
    case "darkroom":
    case "D'Ark Room": {
      let logo = <Darkroom color={color} className={className2} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/about/darkroom">{logo}</Link>;
      }
    }
    case "datzmuseum":
    case "Datz Museum of Art": {
      let logo = <DatzMuseum color={color} className={className2} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/about/datzmuseum">{logo}</Link>;
      }
    }
    case "books":
    case "datzbooks":
    case "DatzBooks": {
      let logo = <DatzBooks color={color} className={className2} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/about/datzpress">{logo}</Link>;
      }
    }
    case "culture":
    case "Cultural": {
      let logo = <Cultural color={color} className={className2} />;
      return logo;
    }
    case "Datz Press":
    case "datzpress": {
      let logo = <Datzpress color={color} className={className2} />;
      if (offLink) {
        return logo;
      } else {
        return <Link to="/about/datzpress">{logo}</Link>;
      }
    }
    default: {
      if (offLink) {
        return null;
      } else {
        return <Link to="/" />;
      }
    }
  }
}
