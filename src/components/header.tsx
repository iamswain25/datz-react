import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "./FlexCenter";
import { NavLink } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import { headerLinkArr } from "./Links";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter } from "./styles";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.19;
  text-align: center;
  color: #707070;
`;
const marginH16 = css`
  margin-left: 16px;
  margin-right: 16px;
`;
const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;
const marginH10 = css`
  margin-left: 10px;
  margin-right: 10px;
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
            margin-left: 16px;
            margin-right: 16px;
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
      <FlexCenter style={{ flex: 1, justifyContent: "flex-end" }}>
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
      </FlexCenter>
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
            zIndex: 4,
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
