import { css } from "emotion";
import React from "react";
import Datz from "../assets/svg/Datz";
import Link from "./Link";
export default function AdminHeader() {
  return (
    <header
      className={css`
        height: 79px;
        padding-left: 54px;
        display: flex;
        align-items: center;
      `}
    >
      <Datz
        className={css`
          margin-bottom: 8px;
          margin-right: 12px;
        `}
      />
      <div
        className={css`
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          color: #383838;
        `}
      >
        관리자 페이지
      </div>
      <Link
        to={`https://datzpress.com`}
        className={css`
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          color: #707070;
          margin-left: 31px;
          text-decoration: underline;
        `}
      >
        datzpress.com
      </Link>
      <div
        className={css`
          font-size: 14px;
          font-weight: 500;
          text-align: left;
          color: #707070;
          margin-left: 64px;
        `}
      >
        *수정 후 해당란의 ‘Update’를 클릭(배포)
      </div>
    </header>
  );
}
