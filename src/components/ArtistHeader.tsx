import React from "react";
import ArtistCloseBtn from "./ArtistCloseBtn";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { useGlobalLang, useMobileMenu } from "../store/useGlobalState";
import { flexrowcenter, marginH10 } from "./styles";
import { HamburgerButton } from "react-hamburger-button";
import Notice from "./Notice";
import SearchLink from "./SearchLink";
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
const linkActiveClass = css`
  text-decoration: underline;
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
  function openHandler() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Notice />
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
          {isDesktop && <SearchLink color={color} />}
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
              border-left: solid 1px;
              border-left-color: inherit;
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
              <SearchLink color={color} />
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
}
