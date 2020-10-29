import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import DatzpressOrder from "./DatzpressOrder";
import { bottomBtn37, paddingH27 } from "./styles";
import useLang from "./useLang";
import BtnShare from "./BtnShare";
import BtnBackTo from "./BtnBackTo";
const stickyContainer = css`
  position: fixed;
  top: 79px;
  width: 350px;
  height: calc(100vh - 79px);
  margin-left: 18px;
  margin-right: 40px;
  font-family: datz-medium;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function PublicationItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes, en] = useLang("publication");
  const { title, artist, preview_quote, preview_body, order_url, id } = item;
  return (
    <>
      <div
        className={css`
          width: 350px;
          margin-left: 18px;
          margin-right: 40px;
        `}
      />
      <div className={isDesktop ? stickyContainer : mobileContainer}>
        <div
          className={css`
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
          `}
        >
          <BtnBackTo title="< back to Publication" to="/publication" />
          <BtnShare title={title} />
        </div>
        <DatzpressOrder order={order_url} />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 0 ${isDesktop ? 10 : 0}px ${isDesktop ? 0 : 40}px;
            flex: 1;
            color: ${!en ? "#5d5d5d" : "#4b4b4b"};
          `}
        >
          {item.edition && (
            <div className={classes.edition}>{item.edition}</div>
          )}
          {item.copies_count && (
            <div className={classes.copies_count}>{item.copies_count}</div>
          )}
          <div className={classes.title}>{title}</div>
          <div className={classes.artist}>{artist}</div>
          <div className={classes.quotes}>{preview_quote}</div>
          <div className={classes.body}>{preview_body}</div>
        </div>
        <Link
          to={`/publication/${id}/readmore`}
          className={css`
            border-top: solid 1px #707070;
            ${bottomBtn37}
          `}
        >
          read more {">"}
        </Link>
      </div>
    </>
  );
}
