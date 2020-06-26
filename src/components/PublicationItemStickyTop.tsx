import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import DatzpressOrder from "./DatzpressOrder";
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
`;
export default function PublicationStickyTop() {
  const isDeskTop = useDesktop();
  return (
    <div className={isDeskTop ? stickyContainer : mobileContainer}>
      <PublicationCloseBtn />
      <DatzpressOrder />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-left: 10px;
          padding-right: 10px;
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
          Limited Edition
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
          300 copies
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
          Nothing Will Ever be the Same Again
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
          Amanda Marchand
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
          “Three windows in an old school house. Four, if you count the camera
          as a window, too” - artist’s note
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
          The book focuses on three windows in a century-old schoolhouse and
          their subtle surprises. The square panes and the window reference the
          medium-format camera frame, producing a square negative. This work is
          a return to a childhood state of pure presence, recalling, long hours
          at play in the Canadian snow. Like the practice of meditation, these
          quiet photographs ask, What happens when you pay attention? The book
          focuses on three windows in a century-old schoolhouse and their subtle
          surprises. The square panes and the window reference the medium-format
          camera frame, producing a square negative. This work is a return to a
          childhood state of pure presence, recalling, long hours at play in the
          Canadian snow. Like the practice of meditation, these quiet
          photographs ask, What happens when you pay attention?
        </div>
      </div>
      <Link
        to="/publication/nothingwill/readmore"
        className={css`
          width: 100%;
          border-top: solid 1px #707070;
          min-height: 37px;
          text-align: center;
          font-family: BauerGroteskOTW03;
          font-size: 14px;
          line-height: 1.21;
          color: #707070;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        read more {">"}
      </Link>
    </div>
  );
}
