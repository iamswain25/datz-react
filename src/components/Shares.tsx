import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import blog from "../assets/svg/0625/0625_blog.svg";
import fb from "../assets/svg/0625/0625_FB.svg";
import insta from "../assets/svg/0625/0625_instagram.svg";
import mail from "../assets/svg/0625/0625_mail.svg";
import share from "../assets/svg/0625/0625_share.svg";
// import twitter from "../assets/svg/0625/0625_twitter.svg";

const padding = css`
  color: #707070;
  display: flex;
  align-items: center;
  justify-contents: center;
`;
export default function Shares() {
  return (
    <div
      className={css`
        font-family: datz-medium;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        flex-direction: row;
        display: flex;
      `}
    >
      <a
        href="mailto:datzpress@datzpress.com"
        target="_blank"
        rel="noopener noreferrer"
        className={padding}
      >
        <img
          src={mail}
          alt="share"
          className={css`
            height: 24px;
            width: 24px;
            margin-right: 21px;
          `}
        />
      </a>
      <Link to="/share" className={padding}>
        <img
          src={share}
          alt="share"
          className={css`
            height: 24px;
            width: 24px;
            margin-right: 20px;
          `}
        />
      </Link>
      <a
        href="https://www.instagram.com/datzpress/"
        target="_blank"
        rel="noopener noreferrer"
        className={padding}
      >
        <img
          src={insta}
          alt="insta"
          className={css`
            height: 24px;
            width: 24px;
            margin-right: 23px;
          `}
        />
      </a>
      <a
        href="https://www.facebook.com/datzpresspage"
        target="_blank"
        rel="noopener noreferrer"
        className={padding}
      >
        <img
          src={fb}
          alt="fb"
          className={css`
            height: 24px;
            width: 24px;
            margin-right: 20px;
          `}
        />
      </a>
      {/* <a
        href="https://twitter.com/datzpress"
        target="_blank"
        rel="noopener noreferrer"
        className={padding}
      >
        <img
          src={twitter}
          alt="twitter"
          className={css`
            height: 24px;
            margin-right: 16px;
          `}
        />
      </a> */}
      <a
        href="https://blog.naver.com/datzpress"
        target="_blank"
        rel="noopener noreferrer"
        className={padding}
      >
        <img
          src={blog}
          alt="blog"
          className={css`
            height: 24px;
            width: 24px;
          `}
        />
      </a>
    </div>
  );
}
