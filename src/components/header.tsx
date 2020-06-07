import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "./FlexCenter";
import { Link } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import { headerLinkArr } from "./Links";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { HamburgerButton } from "react-hamburger-button";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
  margin-left: 16px;
  margin-right: 16px;
`;
const marginNone = css`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function Header() {
  const [text, setText] = React.useState("");
  const isDeskTop = useDesktop();
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  const [isOpen, setOpen] = React.useState(false);
  function openHandler() {
    setOpen(!isOpen);
  }
  let links = null;
  if (isDeskTop) {
    links = (
      <>
        {headerLinkArr.map(([label, link], i) => {
          return (
            <Link className={headerText} to={link} key={i}>
              {label}
            </Link>
          );
        })}

        <div
          className={css`
            width: 0;
            height: 12px;
            border: solid 1px #707070;
            margin-left: 16px;
            margin-right: 16px;
          `}
        />
        <Link className={headerText} to="/">
          Store
        </Link>
      </>
    );
  }
  return (
    <>
      <Headroom
        style={{
          height: 79,
          marginLeft: isDeskTop ? 37 : 20,
          marginRight: isDeskTop ? 37 : 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <FlexCenter style={{ justifyContent: "flex-start" }}>
          <Link
            className={css`
              ${headerText}
              ${!isDeskTop && "margin: 0;"}
            `}
            to="/"
          >
            <Datz
              className={css`
                height: 20px;
              `}
            />
          </Link>
          {links}
        </FlexCenter>
        <FlexCenter style={{ flex: 1, justifyContent: "flex-end" }}>
          {isDeskTop && (
            <>
              <span
                className={css`
                  ${headerText}
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
                  flex-basis: 56px;
                  margin: 0;
                `}
              />
            </>
          )}
          <button
            className={css`
              ${headerText};
              ${marginNone};
            `}
          >
            EN
          </button>
          <div
            className={css`
              width: 0;
              height: 12px;
              border: solid 1px #707070;
            `}
          />
          <button
            className={css`
              ${headerText};
              ${marginNone};
            `}
          >
            KR
          </button>
          {!isDeskTop && (
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
      </Headroom>
      {isOpen && <MenuAside value={isOpen} setValue={openHandler} />}
    </>
  );
}
