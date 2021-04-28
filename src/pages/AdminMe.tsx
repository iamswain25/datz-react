import React from "react";
import { css } from "emotion";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import Link from "../components/Link";
import { auth, firestore } from "../config/firebase";
import useTitle from "../utils/useTitle";

export default function AdminMe() {
  const [doc] = useDocumentDataOnce<any>(
    firestore.collection("users").doc(auth.currentUser?.uid),
    { idField: "id" }
  );
  useTitle();
  return (
    <section
      className={css`
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        text-align: center;
      `}
    >
      <h1
        className={css`
          font-size: 30px;
        `}
      >
        Admin Info
      </h1>

      <ul
        className={css`
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        `}
      >
        <li>
          <img
            src={auth.currentUser?.photoURL || ""}
            alt="photoUrl"
            className={css`
              border-radius: 50%;
            `}
          />
        </li>
        <li
          className={css`
            margin-top: 10px;
          `}
        >
          {auth.currentUser?.email}
        </li>
        <li>{auth.currentUser?.displayName}</li>
        <li
          className={css`
            margin-top: 10px;
            font-size: 18px;
          `}
        >
          {doc?.admin ? (
            <div>
              <span>You are our admin, please proceed at </span>
              <br />
              <Link
                to="/admin"
                className={css`
                  text-decoration: underline;
                `}
              >
                datzpress.com/admin
              </Link>
            </div>
          ) : (
            <div>
              You have no permission, <br />
              please contact system admin.
            </div>
          )}
        </li>
        <li>
          <button
            onClick={() => auth.signOut()}
            className={css`
              text-decoration: underline;
              font-size: 22px;
              margin-top: 30px;
            `}
          >
            logout
          </button>
        </li>
      </ul>
    </section>
  );
}
