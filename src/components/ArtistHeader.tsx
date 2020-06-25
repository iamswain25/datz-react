import React from "react";
import Headroom from "react-headroom";
import FlexCenter from "./FlexCenter";
import ArtistCloseBtn from "./ArtistCloseBtn";
import Search from "../assets/svg/Search";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import MenuAside from "./MenuAside";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { HamburgerButton } from "react-hamburger-button";
const headerText = css`
  font-family: BauerGroteskOTW03;
  font-size: 16px;

  line-height: 1.19;

  text-align: center;
  color: #ffffff;
  margin-left: 16px;
  margin-right: 16px;
`;
const marginNone = css`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function ArtistHeader(props: { fixed?: boolean }) {
  const { fixed = false } = props;
  const isDeskTop = useDesktop();
  const [lang, setLang] = useGlobalState(LANG);
  const [isOpen, setOpen] = React.useState(false);
  function openHandler() {
    setOpen(!isOpen);
  }

  const innerHeader = (
    <>
      <FlexCenter style={{ justifyContent: "flex-start" }}>
        <ArtistCloseBtn />
      </FlexCenter>
      <FlexCenter style={{ flex: 1, justifyContent: "flex-end" }}>
        <button
          className={css`
            ${headerText};
            ${marginNone};
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
            ${marginNone};
          `}
          style={lang === "ko" ? { color: "#ffffff" } : { color: "#cccccc" }}
        >
          KR
        </button>
        {!isDeskTop && (
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
            display: "flex",
            alignItems: "center",
            zIndex: 4,
            marginLeft: isDeskTop ? 37 : 20,
            marginRight: isDeskTop ? 37 : 20,
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
          marginLeft: isDeskTop ? 55 : 20,
          marginRight: isDeskTop ? 55 : 20,
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
