import React from "react";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import { useGlobalState, LANG } from "../store/useGlobalState";
import { bottomBtn37 } from "./styles";
import { exhibitions } from "../@type/exhibitions";
import DatzmuseumOrder from "./DatzmuseumOrder";
import CloseShare from "./CloseShare";
import { exhibitionCurrentPast } from "../utils/datefns";
import useBtnBack from "./useBtnBack";
import Linkify from "react-linkify";
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
const p2Class = css`
  font-family: ArnoPro-Display;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.4px;
  text-align: left;
  color: #4b4b4b;
  margin-top: 30px;
  overflow: hidden;
`;
const p2ClassKo = css`
  font-family: SpoqaHanSans;
  font-size: 16px;
  line-height: 1.69;
  text-align: left;
  color: #5d5d5d;
  margin-top: 23px;
`;

const p3Class = css`
  font-family: ArnoPro-Subhead;
  font-size: 17px;
  line-height: 1.59;
  text-align: left;
  color: #4b4b4b;
  white-space: break-spaces;
`;
const p3ClassKo = css`
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.93;
  text-align: left;
  color: #5d5d5d;
  margin-top: 41px;
  white-space: break-spaces;
`;
export default function ExhibitionMoreLeft() {
  const isDesktop = useDesktop();
  const { id = 1 } = useParams();
  const item = exhibitions[Number(id)];
  const goBack = useBtnBack();
  const [lang] = useGlobalState(LANG);

  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <CloseShare close={`/exhibition/${id}`} />
      <DatzmuseumOrder order={item.visit_url} />
      <section
        className={css`
          flex: 1;
          overflow-y: auto;
          padding-left: 10px;
          padding-right: 10px;
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
            font-family: ${lang === "ko" ? "SpoqaHanSans" : "ArnoPro-Subhead"};
            font-size: ${lang === "ko" ? 23 : 27}px;
            line-height: ${lang === "ko" ? 1.48 : 1.19};
            margin-top: ${lang === "ko" ? 22 : 28}px;
            letter-spacing: 0.54px;
            text-align: center;
            color: #4b4b4b;
          `}
        >
          {lang === "ko" ? item.title_ko : item.title_en}
        </div>
        <Linkify>
          <div className={lang === "ko" ? p2ClassKo : p2Class}>
            {lang === "ko" ? item.body_ko : item.body_en}
          </div>
          <div className={lang === "ko" ? p3ClassKo : p3Class}>
            {lang === "ko" ? item.notes_ko : item.notes_en}
          </div>
        </Linkify>
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
