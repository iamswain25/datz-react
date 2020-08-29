import React from "react";
import { auth, Firebase } from "../config/firebase";
import { RouteComponentProps } from "react-router-dom";
const provider = new Firebase.auth.GoogleAuthProvider();
export default (props: RouteComponentProps) => {
  function signin() {
    auth
      .signInWithPopup(provider)
      .then(() => props.history.push("/admin"))
      .catch(console.error);
  }
  return <button onClick={signin}>Sign in</button>;
};
