import React from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import { headerLinkArr, store } from "./Links";
import useDesktop from "./useDesktop";
import { useGlobalLang, useMobileMenu } from "../store/useGlobalState";
import { flexrowcenter, marginH10, marginH16 } from "./styles";
// import SvgMenu from "../assets/svg/SvgMenu";
import { HamburgerButton } from "react-hamburger-button";
import Notice from "./Notice";
const headerText = css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;

export default function Header({
  fixed = false,
  sticky = false,
  color = "#707070",
  backgroundColor = "rgba(255,255,255,0.8)",
}) {
  const [text, setText] = React.useState("");
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalLang();
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  const [isOpen, setOpen] = useMobileMenu();
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
              key={label + i}
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
          href={store[lang]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {store.label}
        </a>
      </>
    );
  }
  const innerHeader = (
    <>
      <Notice />
      <div
        className={css`
          display: flex;
          align-items: center;
          height: 79px;
          max-width: 1920px;
          margin: 0 auto;
          padding: 0 ${isDesktop ? 37 : 17}px;
          color: ${color};
        `}
      >
        <NavLink
          className={css`
            ${flexrowcenter}
            ${headerText}
          padding-left: ${isDesktop ? 16 : 5}px;
            padding-right: ${isDesktop ? 32 : 5}px;
            margin-bottom: 8px;
          `}
          to="/"
        >
          <Datz color={color === "#707070" ? "#606060" : color} />
        </NavLink>
        {links}
        <div
          className={css`
            ${flexrowcenter}
            flex: 1;
            justify-content: flex-end;
            font-size: 16px;
            font-family: datz-medium;
          `}
        >
          {isDesktop && (
            <Link to="/search">
              <span>Search</span>
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
            </Link>
          )}
          <button
            className={css`
              ${headerText};
              ${marginH10};
              ${lang === "en" ? linkActiveClass : undefined};
              ${color === "white" ? "color: white" : ""}
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
              ${lang === "ko" ? linkActiveClass : undefined};
              ${color === "white" ? "color: white" : ""}
            `}
          >
            KR
          </button>
          {!isDesktop && (
            <>
              <Link
                to="/search"
                className={css`
                  display: flex;
                `}
              >
                <Search
                  className={css`
                    margin-right: 20px;
                    width: 15px;
                    height: 15px;
                  `}
                />
              </Link>
              <HamburgerButton
                open={isOpen}
                onClick={openHandler}
                width={18}
                height={15}
                strokeWidth={1}
                color={color}
                animationDuration={1}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
  if (sticky) {
    return (
      <div
        className={css`
                position: sticky;
                top: 0;
                z-index: 5;
                background-color: ${backgroundColor};
              `}
      >
        {innerHeader}
      </div>
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
            left: 0;
            z-index: 5;
            color: ${color};
            background-color: ${backgroundColor};
          `}
        >
          {innerHeader}
        </div>
      </>
    );
  }
  return (
    <>
      <Headroom
        style={{
          zIndex: 5,
          backgroundColor: backgroundColor,
          margin: "0 auto",
        }}
      >
        {innerHeader}
      </Headroom>
    </>
  );
}
