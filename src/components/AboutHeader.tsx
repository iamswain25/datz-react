import React from "react";
import Headroom from "react-headroom";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useGlobalLang, useMobileMenu } from "../store/useGlobalState";
import { flexrowcenter, marginH10, marginH16 } from "./styles";
import Datz from "../assets/svg/Datz";
import { otherLinks } from "./Links";
import { NavLink, Link } from "react-router-dom";
// import SvgMenu from "../assets/svg/SvgMenu";
import { HamburgerButton } from "react-hamburger-button";
import Notice from "./Notice";
const headerText = css`
  font-family: datz-medium;
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
`;

export default function AboutHeader({
  fixed = false,
  sticky = false,
  change = false,
  color = "#fff",
  backgroundColor = "#afafaf",
}) {
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalLang();
  const [isOpen, setOpen] = useMobileMenu();
  const [colors, setColors] = React.useState({ color, backgroundColor });
  function openHandler() {
    setOpen(!isOpen);
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
          color: ${colors.color};
          position: relative;
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
              top: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            {otherLinks.map(([label, link], i) => {
              return (
                <NavLink
                  className={headerText}
                  to={link}
                  key={link + i}
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
              ${lang === "en" ? linkActiveClass : undefined};
            `}
            onClick={() => setLang("en")}
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
              ${lang === "ko" ? linkActiveClass : undefined};
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
                  color={colors.color}
                  className={css`
                    width: 15px;
                    height: 15px;
                    margin-right: 20px;
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
                animationDuration={0.5}
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
                z-index: 2;
                background-color: ${colors.backgroundColor};
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
    </>
  );
}
