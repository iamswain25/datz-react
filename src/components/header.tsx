import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "./FlexCenter";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import logo from "../assets/images/datzmain.svg";
import { css } from "emotion";

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
  max-width: 120px;
  flex: 1;
`;
const marginNone = css`
  margin-left: 10px;
  margin-right: 10px;
`;
export default () => {
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
      <FlexCenter style={{ flex: 1, justifyContent: "flex-start" }}>
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
          `}
        ></div>
        <Link className={headerText} to="/">
          Store
        </Link>
      </FlexCenter>
      <FlexCenter>
        <Link to="/" className={headerText}>
          Search
        </Link>
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
