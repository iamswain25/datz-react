import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "./FlexCenter";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import logo from "../assets/svg/0524_datz main.svg";
import { css } from "emotion";
// import menu from "../assets/svg/menu.svg";
// import search from "../assets/svg/search.svg";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
  margin-left: 16px;
  margin-right: 16px;
`;
const marginNone = css`
  margin-left: 10px;
  margin-right: 10px;
`;
export default () => {
  const [text, setText] = React.useState("");
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  return (
    <Headroom
      style={{
        height: 79,
        marginLeft: 37,
        marginRight: 37,
        display: "flex",
        alignItems: "center",
      }}
    >
      <FlexCenter style={{ justifyContent: "flex-start" }}>
        <Link className={headerText} to="/">
          <img
            src={logo}
            alt="datz Logo"
            className={css`
              height: 20px;
            `}
          />
        </Link>
        <Link className={headerText} to="/">
          Publication
        </Link>
        <Link className={headerText} to="/">
          Artist Projects
        </Link>
        <Link className={headerText} to="/">
          Exhibition
        </Link>
        <Link className={headerText} to="/">
          Events
        </Link>
        <div
          className={css`
            width: 0;
            height: 12px;
            border: solid 1px #707070;
            margin-left: 16px;
            margin-right: 16px;
          `}
        />
        <Link className={headerText} to="/">
          Store
        </Link>
      </FlexCenter>
      <FlexCenter style={{ flex: 1, justifyContent: "flex-end" }}>
        <span
          className={css`
            ${headerText}
            margin: 0;
          `}
        >
          Search
        </span>
        <input
          type="text"
          value={text}
          onChange={textHandler}
          className={css`
            ${headerText};
            border-bottom: solid 1px #707070;
            flex-basis: 56px;
            margin: 0;
          `}
        />
        <button
          className={css`
            ${headerText};
            ${marginNone};
          `}
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border: solid 1px #707070;
          `}
        />
        <button
          className={css`
            ${headerText};
            ${marginNone};
          `}
        >
          KR
        </button>
      </FlexCenter>
    </Headroom>
  );
};
