import React from "react";
import { css } from "emotion";
import { Link, useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import CloseShare from "./CloseShare";
import { bottomBtn37, paddingH27 } from "./styles";
import { exhibitions } from "../@type/exhibition";
import { exhibitionCurrentPast } from "../utils/datefns";
import { useGlobalState, LANG } from "../store/useGlobalState";
import DatzmuseumOrder from "./DatzmuseumOrder";
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
export default function ExhibitionItemLeft({ item = exhibitions[1] }) {
  const { id = 1 } = useParams();
  const isDesktop = useDesktop();
  const [lang] = useGlobalState(LANG);
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <CloseShare close="/exhibition" />
      <DatzmuseumOrder order={item.visit_url} />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-left: ${isDesktop ? 10 : 0}px;
          padding-right: ${isDesktop ? 10 : 0}px;
          flex: 1;
        `}
      >
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 20px;
            line-height: 1.4;
            letter-spacing: 0.4px;
            text-align: center;
            color: #707070;
            margin-top: 18px;
          `}
        >
          {item.start_date} - {item.end_date}
        </div>
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 16px;
            line-height: 1.38;
            letter-spacing: 0.32px;
            text-align: center;
            color: #afafaf;
            margin-top: 3px;
          `}
        >
          {exhibitionCurrentPast(item.start_date, item.end_date)}
        </div>
        <div
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 27px;
            line-height: 1.19;
            letter-spacing: 0.54px;
            text-align: center;
            color: #4b4b4b;
            margin-top: 28px;
          `}
        >
          {lang === "ko" ? item.title_ko : item.title_en}
        </div>
        <div
          className={css`
            font-family: ArnoPro-Display;
            font-size: 20px;
            line-height: 1.35;
            letter-spacing: 0.4px;
            text-align: left;
            color: #4b4b4b;
            margin-top: 30px;
            overflow: hidden;
          `}
        >
          {lang === "ko" ? item.body_ko : item.body_en}
        </div>
      </div>
      <Link
        to={`/exhibition/${id}/readmore`}
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
