import React from "react";
import Headroom from "react-headroom";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter, marginH10, marginH16 } from "./styles";
import Datz from "../assets/svg/Datz";
import { otherLinks } from "./Links";
import { NavLink, Link } from "react-router-dom";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: #ffffff;
  ${marginH16}
  :hover {
    text-decoration: underline;
  }
`;

const linkActiveClass = css`
  text-decoration: underline;
  color: #383838;
`;

export default function AboutHeader({
  fixed = false,
  sticky = false,
  change = false,
  color = "#fff",
  backgroundColor = "#afafaf",
}) {
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState({ color, backgroundColor });
  function openHandler() {
    setOpen(!isOpen);
  }

  const innerHeader = (
    <div
      className={css`
        display: flex;
        align-items: center;
        height: 79px;
        max-width: 1920px;
        padding: 0 ${isDesktop ? 37 : 17}px;
        color: ${colors.color};
        margin: 0 auto;
      `}
    >
      <Link
        to="/"
        className={css`
          ${flexrowcenter}
          flex: 1;
          padding-left: ${isDesktop ? 16 : 5}px;
          padding-right: ${isDesktop ? 16 : 5}px;
          margin-bottom: 8px;
        `}
      >
        <Datz color={colors.color} />
      </Link>
      {isDesktop && (
        <div
          className={css`
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          `}
        >
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
          style={lang === "en" ? { color: colors.color } : { color: "#cccccc" }}
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px ${colors.color};
          `}
        />
        <button
          onClick={() => setLang("ko")}
          className={css`
            ${headerText};
            ${marginH10};
          `}
          style={lang === "ko" ? { color: colors.color } : { color: "#cccccc" }}
        >
          KR
        </button>
        {!isDesktop && (
          <>
            <Search
              color={colors.color}
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
              color={colors.color}
              animationDuration={0.5}
            />
          </>
        )}
      </div>
    </div>
  );
  if (sticky) {
    return (
      <>
        <div
          className={css`
            position: sticky;
            top: 0;
            z-index: 2;
            background-color: ${colors.backgroundColor};
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
            z-index: 5;
            color: ${color};
            background-color: ${backgroundColor};
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
        wrapperStyle={
          change
            ? { maxWidth: 1920, width: "100%", position: "absolute" }
            : undefined
        }
        onPin={
          change
            ? () => setColors({ color: "white", backgroundColor: "#afafaf" })
            : undefined
        }
        onUnfix={
          change
            ? () =>
                setColors({ color: color, backgroundColor: backgroundColor })
            : undefined
        }
        style={{
          backgroundColor: colors.backgroundColor,
        }}
      >
        {innerHeader}
      </Headroom>
      {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
    </>
  );
}
