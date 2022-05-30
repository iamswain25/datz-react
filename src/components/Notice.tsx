import React from "react";
import { css } from "emotion";
import Close from "../assets/svg/Close";
import { useGlobalLang } from "../store/useGlobalState";
import useDesktop from "./useDesktop";
import useNoticeRemove from "./useNoticeRemove";
export default function Notice() {
  const [lang] = useGlobalLang();
  const isDesktop = useDesktop();
  const { remove, notice } = useNoticeRemove();
  if (!notice) return null;
  return (
    <header
      className={css`
        height: ${isDesktop ? "50px" : "auto"};
        overflow: hidden;
        display: flex;
        padding: ${isDesktop ? 0 : 17}px ${isDesktop ? 37 : 17}px;
        background-color: #ffffb0;
        box-sizing: border-box;
        align-items: center;
        color: #383838;
        font-size: 16px;
        position: relative;
      `}
    >
      <button
        type="button"
        onClick={remove}
        className={css`
          font-family: datz-regular;
          font-size: 14px;
          display: flex;
          align-items: center;
          margin-right: 25px;
        `}
      >
        <Close
          color="#383838"
          className={css`
            width: 12px;
            height: 12px;
            margin-left: ${isDesktop ? 16 : 5}px;
            margin-right: 7px;
          `}
        />
        <div>close</div>
      </button>
      <div
        className={css`
          overflow: hidden;
          text-align: center;
          flex: 1;
        `}
      >
        {notice?.[lang]}
      </div>
      <div
        className={css`
          padding-right: 75px;
        `}
      />
    </header>
  );
}
