import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import { NavLink } from "react-router-dom";
import Datz from "../assets/svg/Datz";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import Close from "../assets/svg/Close";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.19;
  text-align: center;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;
export default function Search() {
  const isDesktop = useDesktop(true);
  const [text, setText] = React.useState("");
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function openHandler() {
    setOpen(!isOpen);
  }
  return (
    <main
      className={css`
        background-color: #afafaf;
        color: #ffffff;
        height: 100vh;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          height: 79px;
          max-width: 1920px;
          padding: 0 ${isDesktop ? 37 : 17}px;
          margin: 0 auto;
        `}
      >
        <NavLink
          className={css`
            display: flex;
            align-items: center;
            ${headerText}
            padding-left: ${isDesktop ? 16 : 5}px;
            padding-right: ${isDesktop ? 32 : 5}px;
            margin-bottom: 8px;
          `}
          to="/"
        >
          <Datz color="white" />
        </NavLink>
        <div
          className={css`
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
            font-size: 16px;
            font-family: BauerGroteskOTW03;
          `}
        >
          <button
            className={css`
              ${headerText};
              margin: 0 10px;
              color: ${lang === "en" ? "white" : "#cccccc"};
            `}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <div
            className={css`
              width: 0;
              height: 12px;
              border-left: solid 1px white;
            `}
          />
          <button
            onClick={() => setLang("ko")}
            className={css`
              ${headerText};
              margin: 0 10px;
              color: ${lang === "ko" ? "white" : "#cccccc"};
            `}
          >
            KR
          </button>
          {!isDesktop && (
            <>
              <button
                onClick={() => {}}
                className={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <Close
                  color="#fff"
                  className={css`
                    margin-right: 8px;
                    width: 15px;
                    height: 15px;
                  `}
                />
              </button>
              <HamburgerButton
                open={isOpen}
                onClick={openHandler}
                width={18}
                height={15}
                strokeWidth={1}
                color="white"
                animationDuration={0.5}
              />
            </>
          )}
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          padding: 0 ${isDesktop ? 148 : 17}px;
          width: 100%;
          top: ${isDesktop ? "14px" : "unset"};
        `}
      >
        <div
          className={css`
            border-bottom: 1px solid white;
            height: ${isDesktop ? 50 : 40}px;
            display: flex;
            align-items: center;
            padding: 0 10px;
          `}
        >
          <span className={css``}>Search</span>
          <input
            type="text"
            value={text}
            autoFocus
            onChange={textHandler}
            className={css`
              flex: 1;
              font-size: 16px;
              line-height: 1.19;
              margin-left: 14px;
              margin-right: 8px;
            `}
          />
        </div>
      </div>
      <section
        className={css`
          margin: ${isDesktop ? 0 : 40}px ${isDesktop ? 55 : 17}px 0;
        `}
      >
        <div>search result</div>
      </section>
    </main>
  );
}
