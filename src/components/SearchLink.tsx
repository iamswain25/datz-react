import { css } from "emotion";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../assets/svg/Search";
import { flexrowcenter } from "./styles";
import useDesktop from "./useDesktop";

export default function SearchLink({ color }: { color: string }) {
  const isDesktop = useDesktop();
  if (isDesktop)
    return (
      <Link
        to="/search"
        className={css`
          ${flexrowcenter}
        `}
      >
        <span>Search</span>
        <input
          type="text"
          defaultValue=""
          className={css`
            font-family: datz-medium;
            font-size: 16px;
            line-height: 1.19;
            text-align: center;
            color: inherit;
            :hover {
              text-decoration: underline;
            }
            border-bottom: solid 1px ${color};
            width: 56px;
            margin: 0 8px 5px 5px;
          `}
        />
      </Link>
    );
  return (
    <Link
      to="/search"
      className={css`
        display: flex;
      `}
    >
      <Search
        color={color}
        className={css`
          margin: 10px 20px 10px 15px;
          width: 15px;
          height: 15px;
        `}
      />
    </Link>
  );
}
