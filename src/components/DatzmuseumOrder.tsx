import React from "react";
import { css } from "emotion";
import { flexrowcenter } from "./styles";
import Logo from "./Logo";
import { ExhibitionLogo } from "../@type";

export default function DatzmuseumOrder({
  order,
  logo,
}: {
  order?: string;
  logo: ExhibitionLogo;
}) {
  return (
    <div
      className={css`
        ${flexrowcenter}
        justify-content: space-between;
        border-bottom: solid 1px #707070;
        padding-bottom: 8px;
        min-height: 31px;
        height: 31px;
        font-size: 16px;
        line-height: 1.19;
        color: #707070;
        font-family: datz-medium;
      `}
    >
      <Logo
        type={logo}
        color="#707070"
        className={css`
          margin-bottom: 5px;
        `}
      />
      {logo !== "D'Ark Room" && order && (
        <a
          href={order}
          target="_blank"
          rel="noopener noreferrer"
          className={css`
            ${flexrowcenter}
            color: #707070;
          `}
        >
          Visit DMA &gt;
        </a>
      )}
    </div>
  );
}
