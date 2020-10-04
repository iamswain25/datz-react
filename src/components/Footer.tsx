import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { Flex, FlexRow, F1 } from "./div";
import Shares from "./Shares";
import useDesktop from "./useDesktop";
import Logo from "./Logo";
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
        font-family: BauerGroteskOTW03;
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
            font-family: BauerGroteskOTW03;
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
              {dividerSmallV(
                css`
                  border-left: 1px solid #707070;
                `
              )}
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
          padding-left: 18px;
          padding-right: 18px;
        `}
      >
        <FlexRow
          className={css`
            height: 26px;
            font-family: BauerGroteskOTW03;
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
            font-family: BauerGroteskOTW03;
            font-size: 11px;
            line-height: 1.27;
            text-align: left;
            color: #707070;
          `}
        >
          <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
          <FlexRow
            className={css`
              margin-top: 6px;
            `}
          >
            <Link to="privacy">Privacy Policy</Link>
            {dividerSmallV(
              css`
                border-left: 1px solid #707070;
              `
            )}
            <Link to="terms">Terms of Use</Link>
          </FlexRow>
        </Flex>
        <F1
          className={css`
            justify-content: flex-start;
            align-items: flex-start;
            margin-left: 43px;
            font-family: SpoqaHanSans;
            font-size: 10px;
            line-height: 1.5;
            text-align: left;
            color: #cccccc;
          `}
        >
          <FlexRow>
            <span>대표: 주상연</span>
            {dividerSmallV()}
            <span>전화: 02-447-2581</span>
            {dividerSmallV()}
            <span>사업자등록번호: 206-26-99381</span>
          </FlexRow>
          <FlexRow
            className={css`
              margin-top: 5px;
            `}
          >
            <span>통신판매: 제 2012-서울광진-0124 호</span>
            {dividerSmallV()}
            <span>이용약관</span>
            {dividerSmallV()}
            <span>개인정보처리방침</span>
          </FlexRow>
        </F1>
      </FlexRow>
    </>
  );
}
