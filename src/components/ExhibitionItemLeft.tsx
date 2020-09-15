import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import CloseShare from "./CloseShare";
import { bottomBtn37, paddingH27 } from "./styles";
import { exhibitionCurrentPast } from "../utils/datefns";
import DatzmuseumOrder from "./DatzmuseumOrder";
import useLang from "./useLang";
import Linkify from "./Linkify";
const stickyContainer = css`
  position: sticky;
  top: 79px;
  width: 350px;
  height: calc(100vh - 79px);
  margin-left: 18px;
  margin-right: 40px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function ExhibitionItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("exhibition");
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <CloseShare />
      <DatzmuseumOrder order={item.visit_url} logo={item.type} />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0 ${isDesktop ? 10 : 0}px ${isDesktop ? 0 : 40}px;
          flex: 1;
        `}
      >
        <div className={classes.date}>
          {item.start_date} - {item.end_date}
        </div>
        <div className={classes.type}>
          {exhibitionCurrentPast(item.start_date, item.end_date)}
        </div>
        <div className={classes.title}>{item.title}</div>
        <Linkify>
          <div className={classes.body}>{item.preview_body}</div>
        </Linkify>
      </div>
      <Link
        to={`/exhibition/${item.id}/readmore`}
        className={css`
          border-top: solid 1px #707070;
          ${bottomBtn37}
        `}
      >
        read more {">"}
      </Link>
    </div>
  );
}
