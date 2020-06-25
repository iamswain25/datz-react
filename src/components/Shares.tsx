import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import blog from "../assets/svg/blog.svg";
import fb from "../assets/svg/fb.svg";
import insta from "../assets/svg/insta.svg";
import mail from "../assets/svg/mail.svg";
import Mail from "../assets/svg/Mail";
import share from "../assets/svg/share.svg";
import twitter from "../assets/svg/twitter.svg";

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
        font-family: BauerGroteskOTW03;
        font-size: 16px;
        line-height: 1.19;
        text-align: center;
        flex-direction: row;
        display: flex;
      `}
    >
      <Link to="/mail" className={padding}>
        <Mail
          className={css`
            height: 18px;
            width: 26px;
            margin-right: 21px;
          `}
        />
      </Link>
      <Link to="/share" className={padding}>
        <img
          src={share}
          alt="share"
          className={css`
            height: 24px;
            margin-right: 20px;
          `}
        />
      </Link>
      <Link to="/insta" className={padding}>
        <img
          src={insta}
          alt="insta"
          className={css`
            height: 24px;
            margin-right: 23px;
          `}
        />
      </Link>
      <Link to="/fb" className={padding}>
        <img
          src={fb}
          alt="fb"
          className={css`
            height: 21px;
            margin-right: 20px;
          `}
        />
      </Link>
      <Link to="/twitter" className={padding}>
        <img
          src={twitter}
          alt="twitter"
          className={css`
            height: 20px;
            margin-right: 16px;
          `}
        />
      </Link>
      <Link to="/blog" className={padding}>
        <img
          src={blog}
          alt="blog"
          className={css`
            height: 20px;
          `}
        />
      </Link>
    </div>
  );
}
