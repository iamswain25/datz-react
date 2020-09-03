import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { paddingH27, marginH27 } from "./styles";
import BtnBack from "./BtnBack";
import ShareButtons from "./ShareButtons";
import { useParams } from "react-router-dom";
import useNewsIndex from "../utils/useNewsIndex";
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
export default function NewsItemRight({
  children,
  color = "#707070",
}: {
  children?: any;
  color?: string;
}) {
  const isDesktop = useDesktop();
  const { id } = useParams();
  const item = useNewsIndex(id);
  return (
    <div className={isDesktop ? stickyContainer : undefined}>
      {isDesktop && (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            min-height: 20px;
            margin-bottom: 20px;
          `}
        >
          <ShareButtons color={color} />
        </div>
      )}
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
            color: ${color};
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div
            className={css`
              font-size: 17px;
              border-bottom: solid 1px ${color};
              padding-bottom: 7px;
              margin-bottom: 16px;
            `}
          >
            {item.type}
          </div>
          <div
            className={css`
              font-size: 17px;
              letter-spacing: 0.34px;
            `}
          >
            {item.date}
          </div>
          <div
            className={css`
              font-size: 14px;
              letter-spacing: 0.28px;
              color: ${color};
              height: 36px;
            `}
          >
            {item.place}
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
              font-size: 25px;
              color: ${color};
              text-align: center;
            `}
          >
            {item.title}
          </div>
          <div
            className={css`
              margin-top: 20px;
              font-size: 18px;
              line-height: 1.5;
              text-align: left;
              color: ${color};
              padding-bottom: 49px;
            `}
          >
            {item.body}
          </div>
        </section>
        <div
          className={css`
            ${isDesktop ? undefined : marginH27}
            border-top: solid 1px ${color};
            text-align: center;
            color: ${color};
            margin-bottom: ${isDesktop ? 37 : 0}px;
          `}
        >
          {!isDesktop && <BtnBack color={color} />}
        </div>
      </div>
    </div>
  );
}
