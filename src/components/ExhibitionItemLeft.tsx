import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import { bottomBtn37, paddingH27 } from "./styles";
import { exhibitionCurrentPast } from "../utils/datefns";
import DatzmuseumOrder from "./DatzmuseumOrder";
import useLang from "./useLang";
import Linkify from "./Linkify";
import BtnBackTo from "./BtnBackTo";
import BtnShare from "./BtnShare";
import useNavTopHeight from "./useNavTopHeight";

const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function ExhibitionItemLeft({ item }: { item: any }) {
  const isDesktop = useDesktop();
  const [classes] = useLang("exhibition");
  const { navTopHeight, desktopHeight } = useNavTopHeight();

  const stickyContainer = css`
    position: fixed;
    top: ${navTopHeight}px;
    width: 350px;
    height: ${desktopHeight};
    margin-left: 18px;
    margin-right: 40px;
    font-family: datz-medium;
    display: flex;
    flex-direction: column;
  `;
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
          <BtnBackTo title="< back to Exhibition" to="/exhibition" />
          <BtnShare title={item.title} />
        </div>
        <DatzmuseumOrder order={item.visit_url} logo={item.type} />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            overflow: auto;
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
          <Link
            to={`/exhibition/${item.id}/readmore`}
            className={css`
              font-size: 16px;
              margin: 30px 1px;
              line-height: 1.19;
              text-align: left;
              color: #707070;
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
          width: 350px;
          margin-left: 18px;
          margin-right: 40px;
        `}
      />
    </>
  );
}
