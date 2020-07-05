import React from "react";
import Headroom from "react-headroom";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter, marginH10 } from "./styles";
import Datz from "../assets/svg/Datz";
import { otherLinks } from "./Links";
import { NavLink, Link } from "react-router-dom";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: #ffffff;
  margin-left: 11px;
  margin-right: 11px;
`;

const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;

export default function AboutHeader(props: { fixed?: boolean }) {
  const { fixed = false } = props;
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  function openHandler() {
    setOpen(!isOpen);
  }

  const innerHeader = (
    <>
      <Link
        to="/"
        className={css`
          ${flexrowcenter}
          flex: 1;
          justify-content: flex-start;
        `}
      >
        <Datz color="white" />
      </Link>
      {isDesktop && (
        <div>
          {otherLinks.map(([label, link], i) => {
            return (
              <NavLink
                className={headerText}
                to={link}
                key={i}
                activeClassName={linkActiveClass}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
      <div
        className={css`
          ${flexrowcenter}
          flex: 1;
          justify-content: flex-end;
        `}
      >
        <button
          className={css`
            ${headerText};
            ${marginH10};
          `}
          onClick={() => setLang("en")}
          style={lang === "en" ? { color: "#ffffff" } : { color: "#cccccc" }}
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px #ffffff;
          `}
        />
        <button
          onClick={() => setLang("ko")}
          className={css`
            ${headerText};
            ${marginH10};
          `}
          style={lang === "ko" ? { color: "#ffffff" } : { color: "#cccccc" }}
        >
          KR
        </button>
        {!isDesktop && (
          <>
            <Search
              color="#ffffff"
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
              color="#ffffff"
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
            display: "flex",
            alignItems: "center",
            zIndex: 2,
            paddingLeft: isDesktop ? 37 : 17,
            paddingRight: isDesktop ? 37 : 17,
            backgroundColor: "#afafaf",
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
          height: 79,
          paddingLeft: isDesktop ? 55 : 17,
          paddingRight: isDesktop ? 55 : 17,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#afafaf",
        }}
      >
        {innerHeader}
      </Headroom>
      {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
    </>
  );
}
