import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { Flex, FlexRow } from "./div";
import Shares from "./Shares";
import useDesktop from "./useDesktop";
import { version } from "../../package.json";
import FooterSvgs from "./FooterSvgs";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
        display: flex;
        align-items: center;
        justify-contents: center;
      `}
    >
      Sign up for Datz newsletter
      <ArrowForwardIosIcon
        className={css`
          margin: 4px 0 0 5px;
          height: 12px !important;
          width: 12px !important;
        `}
      />
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
          <FooterSvgs />
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
              margin-bottom: 20px;
            `}
          >
            <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
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
          <FooterSvgs />
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
