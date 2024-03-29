import React from "react";
import { Link } from "react-router-dom";
import { css } from "emotion";
import { HamburgerButton } from "react-hamburger-button";
import Datz from "../assets/svg/Datz";
import Search from "../assets/svg/Search";
import { headerLinkArr, otherLinks, store } from "./Links";
import useLang from "./useLang";
import { useMobileMenu } from "../store/useGlobalState";
import useNavTopHeight from "./useNavTopHeight";
const headerText = css`
  color: #ffffff;
  height: 23px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const asideClass = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #afafaf;
  font-family: datz-medium;
  font-size: 19px;
  line-height: 1.21;
  text-align: left;
  color: #ffffff;
  z-index: 5;
  padding: 17px;
  padding-top: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export default function MenuAside() {
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  function setValue() {
    setMobileMenu(false);
  }
  const lang: "ko" | "en" = useLang()[2];
  const { navTopHeight } = useNavTopHeight();

  function clickHandler() {
    setValue();
  }

  return (
    <aside className={asideClass}>
      <div
        className={css`
          flex-direction: row;
          display: flex;
          align-items: center;
          height: ${navTopHeight}px;
          padding-left: 5px;
        `}
      >
        <Link
          to="/"
          onClick={setValue}
          className={css`
            display: flex;
            margin-bottom: 8px;
          `}
        >
          <Datz color="white" />
        </Link>
        <div
          className={css`
            flex: 1;
            justify-content: flex-end;
            display: flex;
            align-items: center;
          `}
        >
          <Link
            to="/search"
            className={css`
              display: flex;
            `}
          >
            <Search
              color="white"
              className={css`
                margin-right: 20px;
                width: 15px;
                height: 15px;
              `}
            />
          </Link>
          <HamburgerButton
            open={mobileMenu}
            onClick={setValue}
            width={18}
            height={15}
            strokeWidth={1}
            color="white"
            animationDuration={0.5}
          />
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          padding-bottom: 8px;
          padding-left: 5px;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;
        `}
      >
        {headerLinkArr.map(([label, link], i) => {
          return (
            <Link
              className={headerText}
              to={link}
              key={label + i}
              onClick={clickHandler}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          padding-bottom: 8px;
          padding-left: 5px;
        `}
      >
        <a
          className={headerText}
          href={store[lang]}
          onClick={clickHandler}
          target="_blank"
          rel="noopener noreferrer"
        >
          {store.label}
        </a>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          padding-bottom: 8px;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;
          padding-left: 5px;
        `}
      >
        {otherLinks.map(([label, link], i) => {
          return (
            <Link
              className={headerText}
              to={link}
              key={label + i}
              onClick={clickHandler}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <section
        className={css`
          flex: 1;
          align-items: flex-end;
          justify-content: center;
          display: flex;
          margin-bottom: 10px;
        `}
      >
        <div
          className={css`
            height: 14px;
            font-size: 11px;
            color: #ffffff;
            text-align: center;
          `}
        >
          <div>Copyright © 2019 Datz Inc. All rights reserved. </div>
        </div>
      </section>
    </aside>
  );
}
