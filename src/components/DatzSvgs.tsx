import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Datzpress from "../assets/svg/Datzpress";
import Darkroom from "../assets/svg/Darkroom";
import DatzMuseum from "../assets/svg/DatzMuseum";
const flex = css`
  display: flex;
  align-items: center;
`;

const dividerV = (className = "") => (
  <div
    className={css`
      margin-left: 37px;
      margin-right: 21px;
      width: 0;
      height: 29px;
      border-left: solid 1px #707070;
      ${className}
    `}
  />
);
export default function DatzSvgs({ color = "#707070" }) {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        height: 71px;
        margin-left: 37px;
        margin-right: 37px;
        padding-left: 30px;
        padding-right: 30px;
        justify-content: center;
        overflow: hidden;
      `}
    >
      <Link to="/press" className={flex}>
        <Datzpress color={color} />
      </Link>
      {dividerV(css`
        margin-left: 28px;
        margin-right: 25px;
        border-color: ${color};
      `)}
      <Link to="/darkroom" className={flex}>
        <Darkroom color={color} />
      </Link>
      {dividerV(css`
        margin-left: 33px;
        margin-right: 25px;
        border-color: ${color};
      `)}
      <Link to="/museum" className={flex}>
        <DatzMuseum color={color} />
      </Link>
    </div>
  );
}
