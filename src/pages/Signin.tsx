import React from "react";
import { auth, Firebase } from "../config/firebase";
import useAuthRedirectFrom from "../utils/useAuthRedirectFrom";
import { css } from "emotion";
import AdminHeader from "../components/AdminHeader";
const provider = new Firebase.auth.GoogleAuthProvider();
export default function Signin() {
  useAuthRedirectFrom();
  function signin() {
    auth.signInWithPopup(provider).catch(console.error).catch(window.alert);
  }
  return (
    <section
      className={css`
        background-color: #d8d8d8;
      `}
    >
      <AdminHeader
        login={
          <button
            type="button"
            onClick={signin}
            className={css`
              margin-top: 2px;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              color: #707070;
              margin-left: 64px;
              text-decoration: underline;
            `}
          >
            Signin with Google
          </button>
        }
      />
    </section>
  );
}
