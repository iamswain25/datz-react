import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import DatzpressOrder from "./DatzpressOrder";
import { bottomBtn37, paddingH27 } from "./styles";
import useLang from "./useLang";
import BtnShare from "./BtnShare";
import BtnBackTo from "./BtnBackTo";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function PublicationItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes, en] = useLang("publication");
  const { navTopHeight, desktopHeight } = useNavTopHeight();
  const stickyContainer = css`
    position: fixed;
    top: ${navTopHeight}px;
    width: 408px;
    height: ${desktopHeight};
    padding: 0 40px 0 18px;
    font-family: datz-medium;
    display: flex;
    flex-direction: column;
  `;
  const { title, artist, preview_quote, preview_body, order_url, id } = item;
  return (
    <>
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
            overflow: auto;
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
          <Link
            to={`/publication/${id}/readmore`}
            className={css`
              font-size: 16px;
              margin: 30px 1px;
              line-height: 1.19;
              text-align: left;
              color: #707070;
              display: block;
            `}
          >
            read more &gt;
          </Link>
        </div>
        <hr
          className={css`
            border: none;
            border-top: solid 1px #707070;
            ${bottomBtn37}
          `}
        />
      </div>
      <div
        className={css`
          width: 408px;
          padding: 0 40px 0 18px;
        `}
      />
    </>
  );
}
