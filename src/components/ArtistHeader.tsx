import React from "react";
import Headroom from "react-headroom";

import ArtistCloseBtn from "./ArtistCloseBtn";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter, marginH10 } from "./styles";
import { Link } from "react-router-dom";
const headerText = css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: #ffffff;
  margin-left: 16px;
  margin-right: 16px;
  :hover {
    text-decoration: underline;
  }
`;

export default function ArtistHeader({
  fixed = false,
  sticky = false,
  shared = false,
  isWhite = false,
  closeTo,
}: {
  fixed?: boolean;
  sticky?: boolean;
  shared?: boolean;
  isWhite?: boolean;
  closeTo?: string;
}) {
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function openHandler() {
    setOpen(!isOpen);
  }

  const innerHeader = (
    <>
      <div
        className={css`
          ${flexrowcenter}
          flex: 1;
          justify-content: flex-start;
        `}
      >
        <ArtistCloseBtn shared={shared} isWhite={isWhite} closeTo={closeTo} />
      </div>
      <div
        className={css`
          ${flexrowcenter}
          flex: 1;
          justify-content: flex-end;
          font-family: datz-medium;
        `}
      >
        {isDesktop && (
          <Link to="/search">
            <span
              className={css`
                font-size: 16px;
                color: ${isWhite ? "#707070" : "#ffffff"};
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
                color: ${isWhite ? "#707070" : "#ffffff"};
                border-bottom: solid 1px ${isWhite ? "#707070" : "#ffffff"};
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
          `}
          onClick={() => setLang("en")}
          style={
            lang === "en"
              ? { color: isWhite ? "#707070" : "#ffffff" }
              : { color: "#cccccc" }
          }
        >
          EN
        </button>
        <div
          className={css`
            width: 0;
            height: 12px;
            border-left: solid 1px ${isWhite ? "#707070" : "#ffffff"};
          `}
        />
        <button
          onClick={() => setLang("ko")}
          className={css`
            ${headerText};
            ${marginH10};
          `}
          style={
            lang === "ko"
              ? { color: isWhite ? "#707070" : "#ffffff" }
              : { color: "#cccccc" }
          }
        >
          KR
        </button>
        {!isDesktop && (
          <>
            <Link to="/search">
              <Search
                color={isWhite ? "#707070" : "#ffffff"}
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
              color={isWhite ? "#707070" : "#ffffff"}
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
            position: fixed;
position: sticky;
            top: 0;
            height: 79px;
            display: flex;
            align-items: center;
            z-index: 5;
            padding-left: ${isDesktop ? 37 : 17}px;
            padding-right: ${isDesktop ? 37 : 17}px;
            background-color: ${isWhite ? "#fff" : "#afafaf"};
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
            z-index: 2;
            padding-left: ${isDesktop ? 37 : 17}px;
            padding-right: ${isDesktop ? 37 : 17}px;
            background-color: transparent;
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
          height: 79,
          paddingLeft: isDesktop ? 55 : 17,
          paddingRight: isDesktop ? 55 : 17,
          display: "flex",
          alignItems: "center",
          backgroundColor: isWhite ? "#fff" : "#afafaf",
        }}
      >
        {innerHeader}
      </Headroom>
      {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
    </>
  );
}
