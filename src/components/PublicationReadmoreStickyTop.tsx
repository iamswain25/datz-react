import React from "react";
import { css } from "emotion";
import { useHistory, useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import { useGlobalState, LANG } from "../store/useGlobalState";
import PublicationCloseBtn from "./PublicationCloseBtn";
import DatzpressOrder from "./DatzpressOrder";
import { bottomBtn37 } from "./styles";
import { publications } from "../@type/publications";
import usePublicationItem from "../utils/usePublicationItem";
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
const quoteClass = css`
  font-size: 20px;
  font-style: italic;
  line-height: 1.35;
  letter-spacing: 0.4px;
  margin-top: 29px;
`;
const quoteClassKo = css`
  font-size: 16px;
  line-height: 1.69;
  margin-top: 22px;
`;
const p2Class = css`
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.4px;
  margin-top: 30px;
  overflow: hidden;
`;
const p2ClassKo = css`
  font-size: 16px;
  line-height: 1.69;
  margin-top: 23px;
`;

const p3Class = css`
  font-size: 17px;
  line-height: 1.59;
  white-space: break-spaces;
  margin-top: 41px;
`;
const p3ClassKo = css`
  font-size: 14px;
  line-height: 1.93;
  margin-top: 41px;
  white-space: break-spaces;
`;
export default function PublicationStickyTop() {
  const { id } = useParams();
  const isDesktop = useDesktop();
  const history = useHistory();
  const item = publications[Number(id) - 1];
  const { title, artist, quotes, body, notes, order_url } = usePublicationItem(
    item
  );
  function goBack() {
    history.goBack();
  }
  const [lang] = useGlobalState(LANG);

  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <PublicationCloseBtn />
      <DatzpressOrder order={order_url} />
      <section
        className={css`
          flex: 1;
          overflow-y: auto;
          padding-left: 10px;
          padding-right: 10px;
          font-family: ArnoPro-Subhead;
        `}
      >
        <div
          className={css`
            font-size: 20px;
            line-height: 1.4;
            letter-spacing: 0.4px;
            text-align: center;
            color: #707070;
            margin-top: 18px;
          `}
        >
          {item.edition}
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.38;
            letter-spacing: 0.32px;
            text-align: center;
            color: #afafaf;
            margin-top: 3px;
          `}
        >
          {item.copies_count}
        </div>
        <div
          className={css`
            font-family: ${lang === "ko" ? "SpoqaHanSans" : "ArnoPro-Subhead"};
            color: #4b4b4b;
          `}
        >
          <div
            className={css`
              font-size: ${lang === "ko" ? 23 : 27}px;
              line-height: ${lang === "ko" ? 1.48 : 1.19};
              margin-top: ${lang === "ko" ? 22 : 28}px;
              letter-spacing: 0.54px;
              text-align: center;
            `}
          >
            {title}
          </div>
          <div
            className={css`
              font-size: ${lang === "ko" ? 17 : 21}px;
              line-height: ${lang === "ko" ? 1.41 : 1.38};
              margin-top: ${lang === "ko" ? 0 : 4}px;
              letter-spacing: 0.42px;
              text-align: center;
              color: #4b4b4b;
            `}
          >
            {artist}
          </div>
          <div
            className={css`
              text-align: left;
              color: ${lang === "ko" ? "#5d5d5d" : "#4b4b4b"};
            `}
          >
            <p className={lang === "ko" ? quoteClassKo : quoteClass}>
              {quotes}
            </p>
            <p className={lang === "ko" ? p2ClassKo : p2Class}>{body}</p>
            <p className={lang === "ko" ? p3ClassKo : p3Class}>{notes}</p>
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
