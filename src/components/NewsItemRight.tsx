import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import { paddingH17, paddingH27, marginH27 } from "./styles";
import useLang from "./useLang";
import BodyDraftHtml from "./BodyDraftHtml";
import BtnShare from "./BtnShare";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: datz-medium;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc(100vh - 79px);
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
  const [classes] = useLang("news");
  return (
    <div className={isDesktop ? stickyContainer : undefined}>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          ${isDesktop ? undefined : paddingH17}
        `}
      >
        <BtnShare title={item.title} />
      </div>
      <div className={classes.type}>{item.type}</div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: auto;
        `}
      >
        <div
          className={css`
            text-align: center;
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div className={classes.date}>{item.date}</div>
          <div className={classes.place}>{item.place}</div>
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
          <div className={classes.title}>{item.title}</div>
          <div className={classes.body}>
            <BodyDraftHtml item={item} />
          </div>
        </section>
      </div>
      <div
        className={css`
          ${isDesktop ? undefined : marginH27}
          border-top: solid 1px #fff;
          text-align: center;
          margin-bottom: 37px;
        `}
      />
    </div>
  );
}
