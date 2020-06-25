import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Flex, FlexRow, F1 } from "./div";
import Shares from "./Shares";
import datzpress from "../assets/svg/0524_datzpress.svg";
import datzbooks from "../assets/svg/0524_datzbooks.svg";
import datzmuseum from "../assets/svg/0524_datz museum.svg";
const menu = css`
  font-family: BauerGroteskOTW03;
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
const divider = (
  <div
    className={css`
      margin-left: 27px;
      margin-right: 29px;
      height: 0;
      border-left: solid 1px #707070;
    `}
  />
);
const dividerV = (
  <div
    className={css`
      margin-left: 37px;
      margin-right: 21px;
      width: 0;
      height: 29px;
      border-left: solid 1px #707070;
    `}
  />
);
const dividerSmallV = (
  <div
    className={css`
      margin-left: 5px;
      margin-right: 5px;
      height: 8px;
      border-left: solid 1px #d1d1d1;
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
    <Link to="/news" className={padding}>
      News
    </Link>
    <Link to="/support" className={padding}>
      Support
    </Link>
  </div>
);
const dotzsvgs = (
  <>
    <Link to="/press">
      <img
        src={datzpress}
        alt="datzpress"
        className={css`
          height: 30px;
        `}
      />
    </Link>
    {dividerV}
    <Link to="/books">
      <img
        src={datzbooks}
        alt="datzbooks"
        className={css`
          height: 30px;
        `}
      />
    </Link>
    {dividerV}
    <Link to="/museum">
      <img
        src={datzmuseum}
        alt="datzmuseum"
        className={css`
          height: 30px;
        `}
      />
    </Link>
  </>
);
export default function Footer() {
  const isDeskTop = useMediaQuery({ minWidth: 1000 });
  if (!isDeskTop) {
    return (
      <>
        <section
          className={css`
            margin-top: 40px;
            font-family: BauerGroteskOTW03;
            height: 73px;
            background-color: #ececec;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Link
            to="/"
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 21px;
              line-height: 1.24;
              text-align: left;
              color: #707070;
            `}
          >
            Sign up for Datz newsletter {">"}
          </Link>
        </section>

        <FlexRow
          className={css`
            height: 71px;
            margin-left: 37px;
            margin-right: 37px;
            padding-left: 30px;
            padding-right: 30px;
            justify-content: center;
          `}
        >
          {dotzsvgs}
        </FlexRow>
        {divider}
        <F1
          className={css`
            height: 71px;
          `}
        >
          <Shares />
        </F1>
        <FlexRow
          className={css`
            height: 91px;
            margin-left: 37px;
            margin-right: 37px;
            padding-left: 30px;
            padding-right: 30px;
          `}
        >
          <F1
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 11px;
              color: #707070;
              line-height: 2;
            `}
          >
            <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
            <FlexRow className={css``}>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
            </FlexRow>
          </F1>
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
          padding-left: 30px;
          padding-right: 30px;
        `}
      >
        <FlexRow
          className={css`
            height: 26px;
            font-family: BauerGroteskOTW03;
            font-size: 21px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.24;

            text-align: left;
            color: #707070;
          `}
        >
          <Link to="/">Sign up for Datz newsletter {">"}</Link>
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
        <FlexRow className={css``}>{dotzsvgs}</FlexRow>
      </FlexRow>
      {divider}
      <FlexRow
        className={css`
          height: 91px;
          margin-left: 37px;
          margin-right: 37px;
          padding-left: 30px;
          padding-right: 30px;
        `}
      >
        <Flex
          className={css`
            font-family: BauerGroteskOTW03;
            font-size: 11px;
            color: #707070;
            line-height: 2;
          `}
        >
          <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
          <FlexRow className={css``}>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </FlexRow>
        </Flex>
        <F1
          className={css`
            justify-content: flex-start;
            align-items: flex-start;
            margin-left: 43px;
            font-family: NotoSansCJKkr;
            font-size: 10px;
            color: #d1d1d1;
            line-height: 2;
          `}
        >
          <FlexRow className={css``}>
            <span>대표: 주상연</span>
            {dividerSmallV}
            <span>전화: 02-447-2581</span>
            {dividerSmallV}
            <span>사업자등록번호: 206-26-99381</span>
          </FlexRow>
          <FlexRow>
            <span>통신판매: 제 2012-서울광진-0124 호</span>
            {dividerSmallV}
            <span>이용약관</span>
            {dividerSmallV}
            <span>개인정보처리방침</span>
          </FlexRow>
        </F1>
      </FlexRow>
    </>
  );
}
