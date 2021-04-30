import React from "react";
import { Link as L, LinkProps } from "react-router-dom";
export default function Link(props: LinkProps) {
  const { to, className, children, title } = props;
  if (!to) {
    return <div className={className} children={children} title={title} />;
  }
  if (typeof to === "string") {
    return /^https?:\/\//.test(to) ? (
      <a
        title={title}
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        children={children}
      />
    ) : (
      <L {...props} to={to} children={children} title={title} />
    );
  }
  return <L {...props} to={to} children={children} title={title} />;
}
