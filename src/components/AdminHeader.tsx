import { css } from "emotion";
import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Datz from "../assets/svg/Datz";
import { Firebase } from "../config/firebase";
import { timestampRef } from "../utils/lastAdminWrite";
import Link from "./Link";
export default function AdminHeader(props: {
  login?: boolean | React.ReactElement;
}) {
  const { login = false } = props;
  const [timestamp] = useDocumentData<{
    updated_at: Firebase.firestore.Timestamp;
  }>(timestampRef);
  return (
    <header
      className={css`
        height: 79px;
        padding: 0 58px 0 54px;
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
      {!!login ? (
        login
      ) : (
        <div
          className={css`
            margin-top: 2px;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            color: #707070;
            margin-left: 64px;
          `}
        >
          *Be sure to click “Update”(CMD+S) to publish changes
        </div>
      )}
      <div
        className={css`
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: flex-end;
          font-size: 16px;
          font-weight: 500;
          color: #707070;
        `}
      >
        Latest Update: {timestamp?.updated_at.toDate().toString().substr(0, 24)}
      </div>
    </header>
  );
}
