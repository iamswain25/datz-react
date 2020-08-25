import React from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import { headerLinkArr } from "./Links";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter, marginH10, marginH16 } from "./styles";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.19;
  text-align: center;
  color: inherit;
`;

const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;

export default function Header({
  fixed = false,
  sticky = false,
  color = "#707070",
}) {
  const [text, setText] = React.useState("");
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalState(LANG);
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  const [isOpen, setOpen] = React.useState(false);
  function openHandler() {
    setOpen(!isOpen);
  }
  let links = null;
  if (isDesktop) {
    links = (
      <>
        {headerLinkArr.map(([label, link], i) => {
          return (
            <NavLink
              className={`${headerText} ${marginH16}`}
              to={link}
              key={i}
              activeClassName={css`
                ${linkActiveClass} ${color === "white" ? "color: white" : ""}
              `}
            >
              {label}
            </NavLink>
          );
        })}

        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px ${color};
            ${marginH16}
          `}
        />
        <a
          className={`${headerText} ${marginH16}`}
          href="https://datzpress.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store
        </a>
      </>
    );
  }
  const innerHeader = (
    <>
      <NavLink
        className={css`
            ${flexrowcenter}
            ${headerText}
            padding-left: ${isDesktop ? 16 : 5}px;
            padding-right: ${isDesktop ? 16 : 5}px;
            margin-bottom: 8px;
          `}
        to="/"
      >
        <Datz color={color} />
      </NavLink>
      {links}
      <div
        className={css`
          ${flexrowcenter}
          flex: 1;
          justify-content: flex-end;
          font-size: 16px;
          font-family: BauerGroteskOTW03;
        `}
      >
        {isDesktop && (
          <>
            <span
              className={css`
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
                border-bottom: solid 1px ${color};
                width: 56px;
                margin-left: 5px;
                margin-right: 8px;
                margin-bottom: 7px;
              `}
            />
          </>
        )}
        <button
          className={css`
            ${headerText};
            ${marginH10};
            color: ${lang === "en" ? color : "#afafaf"};
          `}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px ${color};
          `}
        />
        <button
          onClick={() => setLang("ko")}
          className={css`
            ${headerText};
            ${marginH10};
            color: ${lang === "ko" ? color : "#afafaf"};
          `}
        >
          KR
        </button>
        {!isDesktop && (
          <>
            <Search
              className={css`
                margin-right: 20px;
              `}
            />
            <HamburgerButton
              open={isOpen}
              onClick={openHandler}
              width={18}
              height={15}
              strokeWidth={1}
              color="black"
              animationDuration={0.5}
            />
          </>
        )}
      </div>
    </>
  );
  if (sticky) {
    return (
      <>
        <div
          className={css`
            position: sticky;
            top: 0;
            height: 79px;
            display: flex;
            align-items: center;
            z-index: 5;
            padding-left: ${isDesktop ? 37 : 17}px;
            padding-right: ${isDesktop ? 37 : 17}px;
            background-color: #fff;
            color: ${color};
          `}
        >
          {innerHeader}
        </div>
        {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
      </>
    );
  }
  if (fixed) {
    return (
      <>
        <div
          className={css`
            position: fixed;
            width: 100%;
            top: 0;
            height: 79px;
            display: flex;
            align-items: center;
            z-index: 5;
            padding-left: ${isDesktop ? 37 : 17}px;
            padding-right: ${isDesktop ? 37 : 17}px;
            color: ${color};
          `}
        >
          {innerHeader}
        </div>
        {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
      </>
    );
  }
  return (
    <>
      <Headroom
        style={{
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          height: 79,
          backgroundColor: "#ffffff",
          paddingLeft: isDesktop ? 37 : 17,
          paddingRight: isDesktop ? 37 : 17,
        }}
      >
        {innerHeader}
      </Headroom>
      {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
    </>
  );
}
