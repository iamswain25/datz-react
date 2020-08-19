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
  color: #707070;
`;

const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;

export default function Header(props: { fixed?: boolean }) {
  const { fixed = false } = props;
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
              activeClassName={linkActiveClass}
            >
              {label}
            </NavLink>
          );
        })}

        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px #707070;
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
            padding-left: ${isDesktop ? 17 : 5}px;
          `}
        to="/"
      >
        <Datz />
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
                border-bottom: solid 1px #707070;
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
            color: ${lang === "en" ? "#707070" : "#afafaf"};
          `}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px #707070;
          `}
        />
        <button
          onClick={() => setLang("ko")}
          className={css`
            ${headerText};
            ${marginH10};
            color: ${lang === "ko" ? "#707070" : "#afafaf"};
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
  if (fixed) {
    return (
      <>
        <div
          style={{
            position: "sticky",
            top: "0",
            height: 79,
            paddingLeft: isDesktop ? 37 : 17,
            paddingRight: isDesktop ? 37 : 17,
            display: "flex",
            alignItems: "center",
            zIndex: 5,
            backgroundColor: "#ffffff",
          }}
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
