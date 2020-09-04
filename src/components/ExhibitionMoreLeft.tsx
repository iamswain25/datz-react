import React from "react";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import { bottomBtn37 } from "./styles";
import DatzmuseumOrder from "./DatzmuseumOrder";
import CloseShare from "./CloseShare";
import { exhibitionCurrentPast } from "../utils/datefns";
import useBtnBack from "./useBtnBack";
import Linkify from "react-linkify";
import useLang from "./useLang";
import useItemIndex from "../utils/useItemIndex";
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

export default function ExhibitionMoreLeft() {
  const isDesktop = useDesktop();
  const { address } = useParams();
  const item = useItemIndex(address, "exhibition");
  const goBack = useBtnBack();
  const [classes] = useLang("exhibition");
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <CloseShare close={`/exhibition/${address}`} />
      <DatzmuseumOrder order={item.visit_url} />
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
          <Linkify>
            <div className={classes.body}>{item.body}</div>
            <div className={classes.notes}>{item.notes}</div>
          </Linkify>
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
