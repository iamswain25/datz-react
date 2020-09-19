import React from "react";
import { css } from "emotion";
import { paddingH55, paddingH27 } from "./styles";
import useDesktop from "./useDesktop";
import useLang from "./useLang";
import Divider from "./Divider";
export default function SupportTexts({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("body");
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        position: absolute;
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        ${isDesktop ? paddingH55 : paddingH27}
      `}
    >
      <div
        className={css`
          margin-top: ${isDesktop ? 111 : 111}px;
          flex: 1;
          width: 100%;
        `}
      >
        <div
          className={css`
            font-size: 23px;
            line-height: 1.17;
          `}
        >
          {item?.title}
        </div>
        <Divider
          color="#fff"
          className={css`
            margin-top: 5px;
          `}
        />
        {/* <div
          className={css`
            margin-top: 12px;
          `}
        >
          <a
            href="membership"
            className={css`
              text-decoration: underline;
            `}
          >
            Become a Member {">"}
          </a>
          <div
            className={css`
              margin-top: 15px;
            `}
          >
            By becoming a Datz supporter, you allow Datz to continue to grow
          </div>
          <div>and flourish by showcasing the art of today and tomorrow.</div>
        </div> */}
      </div>
      <div
        className={css`
          margin-bottom: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          className={css`
            ${classes.book(16, 1)}
            margin-top: 34px;
            max-width: 890px;
            line-height: 20px;
          `}
        >
          {item?.text}
        </div>
        <div
          className={css`
            margin-top: 27px;
          `}
        >
          <a
            href="membership"
            className={css`
              text-decoration: underline;
              font-size: 23px;
              line-height: 1.22;
            `}
          >
            Become a Member {">"}
          </a>
        </div>
      </div>
    </div>
  );
}
