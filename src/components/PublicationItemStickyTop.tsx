import React from "react";
import { css } from "emotion";
import { Link, useParams } from "react-router-dom";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import DatzpressOrder from "./DatzpressOrder";
import { bottomBtn37, paddingH27 } from "./styles";
import { publications } from "../@type/publications";
import usePublicationItem from "../utils/usePublicationItem";
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
export default function PublicationStickyTop() {
  const isDesktop = useDesktop();
  const { id } = useParams();
  const item = publications[Number(id) - 1];
  const {
    title,
    artist,
    preview_quote,
    preview_body,
    order_url,
  } = usePublicationItem(item);
  return (
    <div className={isDesktop ? stickyContainer : mobileContainer}>
      <PublicationCloseBtn />
      <DatzpressOrder order={order_url} />
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
          {item.edition}
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
          {item.copies_count}
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
          {title}
        </div>
        <div
          className={css`
            font-family: ArnoPro-Display;
            font-size: 21px;
            line-height: 1.38;
            letter-spacing: 0.42px;
            text-align: center;
            color: #4b4b4b;
            margin-top: 4px;
          `}
        >
          {artist}
        </div>
        <div
          className={css`
            font-family: ArnoPro-Display;
            font-size: 20px;
            font-style: italic;
            line-height: 1.35;
            letter-spacing: 0.4px;
            text-align: left;
            margin-top: 29px;
            color: #4b4b4b;
          `}
        >
          {preview_quote}
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
          {preview_body}
        </div>
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
  );
}
