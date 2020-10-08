import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import { paddingH27, marginH27 } from "./styles";
import BtnBack from "./BtnBack";
import useLang from "./useLang";
import BodyDraftHtml from "./BodyDraftHtml";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: datz-medium;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  const { type, date, title, place } = item;
  const [classes] = useLang("event");
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
          <div className={classes.type}>{type}</div>
          <div className={classes.date}>{date}</div>
          <div className={classes.place}>{place}</div>
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
          <div className={classes.title}>{title}</div>
          <div className={classes.body}>
            <BodyDraftHtml item={item} />
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
