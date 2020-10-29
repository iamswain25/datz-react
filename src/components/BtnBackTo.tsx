import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
export default function BtnBackTo({
  to = "/",
  title,
}: {
  to?: string;
  title: string;
}) {
  return (
    <Link
      to={to}
      className={css`
        font-size: 14px;
        line-height: 1.21;
        color: #afafaf;
        margin-right: 15px;
      `}
    >
      {title}
    </Link>
  );
}
