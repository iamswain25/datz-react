import React from "react";
import Datzpress from "../assets/svg/Datzpress";
import Share from "../assets/svg/Share";
import Twitter from "../assets/svg/Twitter";
import Fb from "../assets/svg/Fb";
import { css } from "emotion";
import { Link } from "react-router-dom";
import useDesktop from "./useDesktop";
const stickyContainer = css`
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 350px;
  margin-left: 16px;
  margin-right: 40px;
  font-family: BauerGroteskOTW03;
`;
const mobileContainer = css`
  height: 181px;
  position: relative;
`;
export default function PublicationStickyTop() {
  const isDeskTop = useDesktop();
  return (
    <div className={isDeskTop ? stickyContainer : mobileContainer}>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 20px;
          margin-bottom: 20px;
        `}
      >
        <Link
          to="/publication"
          className={css`
            height: 13px;
            font-size: 10px;
            line-height: 1.3;
            text-align: left;
            color: #afafaf;
            margin-right: 45px;
          `}
        >
          x CLOSE
        </Link>
        <Share
          color="#cccccc"
          className={css`
            height: 15px;
          `}
        />
        <Fb
          color="#cccccc"
          className={css`
            height: 15px;
          `}
        />
        <Twitter
          color="#cccccc"
          className={css`
            height: 15px;
          `}
        />
      </div>
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
        <Datzpress />
        <div
          className={css`
            color: #707070;
          `}
        >
          Order >
        </div>
      </div>
      <div>Limited Edition</div>
      <div>300 copies</div>
      <div>Nothing Will Ever be the Same Again</div>
      <div>Amanda Marchand</div>
      <div>
        “Three windows in an old school house. Four, if you count the camera as
        a window, too” - artist’s note
      </div>
      <p>
        The book focuses on three windows in a century-old schoolhouse and their
        subtle surprises. The square panes and the window reference the
        medium-format camera frame, producing a square negative. This work is a
        return to a childhood state of pure presence, recalling, long hours at
        play in the Canadian snow. Like the practice of meditation, these quiet
        photographs ask, What happens when you pay attention?
      </p>
    </div>
  );
}
