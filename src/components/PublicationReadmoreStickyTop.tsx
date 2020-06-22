import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import { css } from "emotion";
import { useHistory } from "react-router-dom";
import useDesktop from "./useDesktop";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex: 1;
  height: 100vh;
  padding-right: 30px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
`;
const mobileContainer = css`
  position: relative;
`;
export default function PublicationStickyTop() {
  const isDeskTop = useDesktop();
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    <div className={isDeskTop ? stickyContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          border-bottom: solid 1px #707070;
          padding-bottom: 8px;
        `}
      >
        <Datzpress
          className={css`
            height: 30px;
          `}
        />
        <a
          href="https://datzpress.com/product/offerings-se"
          className={css`
            color: #707070;
          `}
        >
          Order {">"}
        </a>
      </div>
      <section
        className={css`
          flex: 1;
          overflow-x: scroll;
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
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
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
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
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
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
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
            font-weight: normal;
            font-stretch: normal;
            font-style: italic;
            line-height: 1.35;
            letter-spacing: 0.4px;
            text-align: left;
            margin-top: 29px;
          `}
        >
          “Three windows in an old school house. Four, if you count the camera
          as a window, too” - artist’s note
        </div>
        <p
          className={css`
            font-family: ArnoPro-Display;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.35;
            letter-spacing: 0.4px;
            text-align: left;
            color: #4b4b4b;
            margin-top: 30px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          `}
        >
          The book focuses on three windows in a century-old schoolhouse and
          their subtle surprises. The square panes and the window reference the
          medium-format camera frame, producing a square negative. This work is
          a return to a childhood state of pure presence, recalling, long hours
          at play in the Canadian snow. Like the practice of meditation, these
          quiet photographs ask, What happens when you pay attention? The whole
          book consisted of many pages that could be opened and closed like a
          window. In particular, the “For all the knowledge of the world” page
          reveals hidden poems by opening the image as if it were a window. In
          an edition of 300, as the title itself suggests, no two books are
          exactly alike. One page at the end of every book is unique, with a
          different 2 ¼” C-print tipped in.
        </p>

        <p
          className={css`
            font-family: ArnoPro-Subhead;
            font-size: 17px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.59;
            letter-spacing: normal;
            text-align: left;
            color: #4b4b4b;
            white-space: break-spaces;
          `}
        >
          *Each book has one unique C-print. {"\n \n \n"}Credit {"\n"}Project
          Director: {"\n"}Sangyon Joo{"\n"}
          Text: Amanda Marchand {"\n"}Pre-press: Juyoung Jeong Book{"\n"}Design:
          Xianlu Yi{"\n"}Production: Munsung Print{"\n"}Specification 29.5 × 25
          cm / 84 pages {"\n"}Hard cover binding{"\n"}Limited Edition,{"\n"}300
          copies
          {"\n"}2019 {"\n"}ISBN 978-89-97605-45-3
        </p>
      </section>
      {isDeskTop && (
        <div
          className={css`
            align-items: center;
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 20px;
          `}
        >
          <hr
            className={css`
              height: 0;
              width: 100%;
              border-bottom: solid 1px #707070;
              border-top: none;
            `}
          />
          <button
            onClick={goBack}
            className={css`
              font-family: BauerGroteskOTW03;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.21;
              letter-spacing: normal;
              text-align: center;
              color: #707070;
            `}
          >
            {"<"} back
          </button>
        </div>
      )}
    </div>
  );
}
