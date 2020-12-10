import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { Flex, FlexRow } from "./div";
import Shares from "./Shares";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
import { version } from "../../package.json";
const menu = css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  flex-direction: row;
  display: flex;
`;
const padding = css`
  padding: 11px;
  color: #707070;
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
const dividerSmallV = (className = "") => (
  <div
    className={css`
      margin-left: 5px;
      margin-right: 5px;
      height: 8px;
      border-left: solid 1px #d1d1d1;
      margin-top: 2px;
      ${className}
    `}
  />
);
const Menus = (
  <div className={menu}>
    <Link to="/about" className={padding}>
      About
    </Link>
    <Link to="/contact" className={padding}>
      Contact
    </Link>
    <Link to="/newslist" className={padding}>
      News
    </Link>
    <Link to="/support" className={padding}>
      Support
    </Link>
  </div>
);
const dotzsvgs = (
  <>
    <Logo type="datzpress" color="#404041" />
    {dividerV(css`
      margin-left: 28px;
      margin-right: 25px;
    `)}
    <Logo type="darkroom" color="#404041" />
    {dividerV(css`
      margin-left: 33px;
      margin-right: 25px;
    `)}
    <Logo type="museum" color="#404041" />
  </>
);
export default function Footer() {
  const isDesktop = useDesktop();
  const divider = (
    <div
      className={css`
        margin-left: ${isDesktop ? 55 : 28}px;
        margin-right: ${isDesktop ? 55 : 28}px;
        height: 0;
        border-top: solid 1px #707070;
      `}
    />
  );
  const signup = (
    <a
      href="https://page.stibee.com/subscriptions/19745"
      target="_blank"
      rel="noopener noreferrer"
      className={css`
        font-family: datz-medium;
        font-size: ${isDesktop ? 21 : 19}px;
        line-height: ${isDesktop ? 1.24 : 1.42};
        text-align: left;
        color: #707070;
      `}
    >
      Sign up for Datz newsletter {">"}
    </a>
  );
  if (!isDesktop) {
    return (
      <>
        <section
          className={css`
            margin-top: 40px;
            font-family: datz-medium;
            height: 73px;
            background-color: #ececec;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          {signup}
        </section>

        <div
          className={css`
            padding: 25px 30px;
            display: flex;
            margin: 0 37px;
            justify-content: center;
            overflow: hidden;
          `}
        >
          {dotzsvgs}
        </div>
        {divider}
        <div
          className={css`
            height: 71px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
          `}
        >
          <Shares />
        </div>
        <FlexRow>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              flex: 1;
              font-family: datz-medium;
              font-size: 11px;
              color: #707070;
              line-height: 2;
            `}
          >
            <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
            <FlexRow
              className={css`
                margin-bottom: 20px;
              `}
            >
              <div>Privacy Policy</div>
              {dividerSmallV(
                css`
                  border-left: 1px solid #707070;
                `
              )}
              <div>Terms of Use</div>
            </FlexRow>
          </div>
        </FlexRow>
      </>
    );
  }
  return (
    <>
      <section
        className={css`
          height: 73px;
          background-color: #ececec;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {Menus}
      </section>

      <FlexRow
        className={css`
          justify-content: space-between;
          height: 107px;
          margin-left: 37px;
          margin-right: 37px;
          padding-left: 18px;
          padding-right: 18px;
        `}
      >
        <FlexRow
          className={css`
            height: 26px;
            font-family: datz-medium;
            font-size: 21px;
            line-height: 1.24;
            text-align: left;
            color: #707070;
          `}
        >
          {signup}
          <div
            className={css`
              margin-left: 26px;
              margin-right: 21px;
              height: 29px;
              border-left: solid 1px #707070;
            `}
          />
          <Shares />
        </FlexRow>
        <div
          className={css`
            display: flex;
          `}
        >
          {dotzsvgs}
        </div>
      </FlexRow>
      {divider}
      <FlexRow
        className={css`
          height: 90px;
          margin-left: 37px;
          margin-right: 37px;
          padding-left: 18px;
          padding-right: 18px;
        `}
      >
        <Flex
          className={css`
            font-family: datz-medium;
            font-size: 11px;
            line-height: 1.27;
            text-align: left;
            color: #707070;
          `}
        >
          <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
          <div>version: {version} </div>
        </Flex>
      </FlexRow>
    </>
  );
}
