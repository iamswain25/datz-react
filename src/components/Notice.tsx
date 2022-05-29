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
        padding: ${isDesktop ? 0 : 30}px ${isDesktop ? 37 : 17}px;
        background-color: #ffffb0;
        box-sizing: border-box;
        align-items: center;
        color: #383838;
        font-size: 16px;
        position: relative;
      `}
    >
      <div
        className={css`
          position: absolute;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
          overflow: hidden;
        `}
      >
        {notice?.[lang]}
      </div>
      <button
        type="button"
        onClick={remove}
        className={css`
          font-family: datz-regular;
          font-size: 14px;
          display: flex;
          align-items: center;
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
    </header>
  );
}
