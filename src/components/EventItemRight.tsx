import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import { paddingH27, marginH27 } from "./styles";
import BtnBack from "./BtnBack";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function EventItemRight({
  children,
  item,
}: {
  children?: any;
  item: any;
}) {
  const isDesktop = useDesktop();
  const { type, date, title, body, place } = item;
  return (
    <div className={isDesktop ? stickyContainer : undefined}>
      {isDesktop && <PublicationCloseBtn noClose />}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          flex: 1;
        `}
      >
        <div
          className={css`
            text-align: center;
            color: #707070;
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div
            className={css`
              font-size: 17px;
              border-bottom: solid 1px #707070;
              padding-bottom: 7px;
              margin-bottom: 16px;
            `}
          >
            {type}
          </div>
          <div
            className={css`
              font-size: 17px;
              letter-spacing: 0.34px;
            `}
          >
            {date}
          </div>
          <div
            className={css`
              font-size: 14px;
              letter-spacing: 0.28px;
              color: #afafaf;
              height: 36px;
            `}
          >
            {place}
          </div>
        </div>
        {children}
        <section
          className={
            isDesktop
              ? css`
                  flex: 1;
                `
              : mobileContainer
          }
        >
          <div
            className={css`
              height: 59px;
              font-size: 25px;
              color: #4b4b4b;
              text-align: center;
            `}
          >
            {title}
          </div>
          <div
            className={css`
              font-size: 18px;
              line-height: 1.5;
              text-align: left;
              color: #4b4b4b;
              padding-bottom: 49px;
            `}
          >
            {body}
          </div>
        </section>
        <div
          className={css`
            ${isDesktop ? undefined : marginH27}
            border-top: solid 1px #707070;
            text-align: center;
            margin-bottom: ${isDesktop ? 37 : 0}px;
          `}
        >
          {!isDesktop && <BtnBack />}
        </div>
      </div>
    </div>
  );
}
