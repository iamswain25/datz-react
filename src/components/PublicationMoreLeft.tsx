import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import DatzpressOrder from "./DatzpressOrder";
import Linkify from "react-linkify";
import useLang from "./useLang";
import DraftHtml from "./DraftHtml";
import BtnBackTo from "./BtnBackTo";
import BtnShare from "./BtnShare";
import useParams from "./useParams";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  position: relative;
`;
export default function PublicationMoreLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes, en] = useLang("publication");
  const { navTopHeight, desktopHeight } = useNavTopHeight();
  const { title, artist, quotes, order_url } = item;
  const { id } = useParams();
  const stickyContainer = css`
    align-self: flex-start;
    position: -webkit-sticky;
    position: sticky;
    top: ${navTopHeight}px;
    flex: 1;
    padding-left: 18px;
    height: ${desktopHeight};
    padding-right: 30px;
    font-family: datz-medium;
    display: flex;
    flex-direction: column;
  `;
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        `}
      >
        <BtnBackTo title="< back to Preview" to={`/publication/${id}`} />
        <BtnShare title={title} />
      </div>
      <DatzpressOrder order={order_url} />
      <section
        className={css`
          flex: 1;
          overflow-y: auto;
          padding: 0 ${isDesktop ? 10 : 0}px;
        `}
      >
        {item?.edition && (
          <div className={classes.edition}>{item?.edition}</div>
        )}
        {item?.copies_count && (
          <div className={classes.copies_count}>{item?.copies_count}</div>
        )}
        <div>
          <div className={classes.title}>{title}</div>
          <div className={classes.artist}>{artist}</div>
          <div
            className={css`
              text-align: left;
              color: ${!en ? "#5d5d5d" : "#4b4b4b"};
              white-space: break-spaces;
            `}
          >
            <Linkify>
              <p className={classes.quotes}>{quotes}</p>
            </Linkify>
            <div className={classes.body}>
              <DraftHtml type="body" item={item} />
            </div>
            <div className={classes.notes}>
              <DraftHtml type="note" item={item} />
            </div>
          </div>
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
