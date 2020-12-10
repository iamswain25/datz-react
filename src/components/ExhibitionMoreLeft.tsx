import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import DatzmuseumOrder from "./DatzmuseumOrder";
import { exhibitionCurrentPast } from "../utils/datefns";
import Linkify from "react-linkify";
import useLang from "./useLang";
import BodyDraftHtml from "./BodyDraftHtml";
import BtnBackTo from "./BtnBackTo";
import BtnShare from "./BtnShare";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: fixed;
  position: sticky;
  top: 79px;
  flex: 1;
  padding-left: 18px;
  height: calc(100vh - 79px);
  padding-right: 30px;
  font-family: datz-medium;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
`;

export default function ExhibitionMoreLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("exhibition");
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        `}
      >
        <BtnBackTo title="< back to Preview" to={`/exhibition/${item.id}`} />
        <BtnShare title={item.title} />
      </div>
      <DatzmuseumOrder order={item.visit_url} logo={item.type} />
      <section
        className={css`
          flex: 1;
          overflow-y: auto;
          padding: 0 ${isDesktop ? 10 : 0}px;
        `}
      >
        <div className={classes.date}>
          {item.start_date} - {item.end_date}
        </div>
        <div className={classes.type}>
          {exhibitionCurrentPast(item.start_date, item.end_date)}
        </div>
        <div className={classes.title}>{item.title}</div>
        <div
          className={css`
            text-align: left;
            white-space: break-spaces;
          `}
        >
          <div className={classes.body}>
            <BodyDraftHtml item={item} />
          </div>
          <Linkify>
            <div className={classes.notes}>{item.notes}</div>
          </Linkify>
        </div>
      </section>
      {isDesktop && (
        <hr
          className={css`
            border-style: solid;
            border-width: 0;
            border-top: solid 1px #707070;
            height: 37px;
          `}
        />
      )}
    </div>
  );
}
