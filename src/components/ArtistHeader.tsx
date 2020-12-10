import React from "react";
import ArtistCloseBtn from "./ArtistCloseBtn";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useGlobalLang, useMobileMenu } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
import { flexrowcenter, marginH10 } from "./styles";
import { Link } from "react-router-dom";
import { Sticky } from "react-sticky";
const headerText = css`
  font-family: datz-medium;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  :hover {
    text-decoration: underline;
  }
`;
const defaultClassname = css`
  background-color: #afafaf;
  color: white;
`;
export default function ArtistHeader({
  className = defaultClassname,
  color = "#fff",
  children,
}: {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}) {
  const isDesktop = useDesktop();
  const [lang, setLang] = useGlobalLang();
  const [isOpen, setOpen] = useMobileMenu();
  const [text, setText] = React.useState("");
  function textHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function openHandler() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Sticky>
        {(props) => (
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
              ${className}
            `}
            style={props.style}
          >
            <div
              className={css`
                ${flexrowcenter}
                flex: 1;
                justify-content: flex-start;
              `}
            >
              {children ?? <ArtistCloseBtn />}
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
                      border-bottom: solid 1px;
                      border-bottom-color: inherit;
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
                style={lang === "en" ? undefined : { color: "#cccccc" }}
              >
                EN
              </button>
              <div
                className={css`
                  width: 0;
                  height: 12px;
                  border-left: solid 1px;
                  border-left-color: inherit;
                `}
              />
              <button
                onClick={() => setLang("ko")}
                className={css`
                  ${headerText};
                  ${marginH10};
                `}
                style={lang === "ko" ? undefined : { color: "#cccccc" }}
              >
                KR
              </button>
              {!isDesktop && (
                <>
                  <Link to="/search">
                    <Search
                      color={color}
                      className={css`
                        margin-right: 20px;
                        width: 15px;
                        height: 15px;
                      `}
                    />
                  </Link>
                  <HamburgerButton
                    color={color}
                    open={isOpen}
                    onClick={openHandler}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    animationDuration={0.5}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </Sticky>
    </>
  );
}
