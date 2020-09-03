import React from "react";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import DatzpressOrder from "./DatzpressOrder";
import { bottomBtn37 } from "./styles";
import { publications } from "../@type/publications";
import usePublicationItem from "../utils/usePublicationItem";
import Linkify from "react-linkify";
import useBtnBack from "./useBtnBack";
import useLang from "./useLang";

const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 79px;
  flex: 1;
  padding-left: 18px;
  height: calc(100vh - 79px);
  padding-right: 30px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
`;
export default function PublicationStickyTop() {
  const { id } = useParams();
  const isDesktop = useDesktop();
  const [classes, en] = useLang("publication");
  const item = publications.find((p) => p.id === Number(id));
  const { title, artist, quotes, body, notes, order_url } = usePublicationItem(
    item
  );
  const goBack = useBtnBack();

  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <PublicationCloseBtn />
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
          <div className={classes.copies_count}>
            {item?.copies_count} copies
          </div>
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
              <p className={classes.body}>{body}</p>
              <p className={classes.notes}>{notes}</p>
            </Linkify>
          </div>
        </div>
      </section>
      {isDesktop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
          `}
        >
          <button
            onClick={goBack}
            className={css`
              border-top: solid 1px #707070;
              ${bottomBtn37}
            `}
          >
            {"<"} back
          </button>
        </div>
      )}
    </div>
  );
}
