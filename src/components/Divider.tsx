import React from "react";
import { css } from "emotion";
export default function Divider({
  className,
  color = "#afafaf",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <hr
      className={css`
        height: 0;
        border-top: solid 1px ${color};
        ${className}
      `}
    />
  );
}
