import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { paddingH27, marginH27 } from "./styles";
import BtnBack from "./BtnBack";
import ShareButtons from "./ShareButtons";
import useLang from "./useLang";
import BodyDraftHtml from "./BodyDraftHtml";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: calc(100vh - 79px);
  overflow: auto;
  color: #fff;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function NewsItemRight({
  children,
  item,
}: {
  children?: any;
  item: any;
}) {
  const isDesktop = useDesktop();
  const [classes] = useLang("body");
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
          <ShareButtons color="#fff" />
        </div>
      )}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
      >
        <div
          className={css`
            text-align: center;
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div
            className={css`
              font-size: 17px;
              border-bottom: solid 1px #fff;
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
              ${classes.book(14, 1)}
              margin-top: 3px;
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
              ${classes.book(25, 1)}
              margin-top: 20px;
            `}
          >
            {item.title}
          </div>
          <div
            className={css`
              ${classes.regular(18, 1.5)}
              margin-top: 20px;
              padding-bottom: 49px;
            `}
          >
            <BodyDraftHtml item={item} />
          </div>
        </section>
        <div
          className={css`
            ${isDesktop ? undefined : marginH27}
            border-top: solid 1px #fff;
            text-align: center;
            margin-bottom: ${isDesktop ? 37 : 0}px;
          `}
        >
          {!isDesktop && <BtnBack color="#fff" />}
        </div>
      </div>
    </div>
  );
}
