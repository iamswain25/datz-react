import React from "react";
import { auth, Firebase } from "../config/firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container } from "@material-ui/core";
const provider = new Firebase.auth.GoogleAuthProvider();
export default function Signin() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  React.useEffect(() => {
    if (user) {
      history.replace("/admin");
    }
  }, [user, history]);
  function signin() {
    auth.signInWithPopup(provider).catch(console.error);
  }
  return (
    <Container maxWidth="sm">
      <h1>관리자 로그인 페이지</h1>
      <button onClick={signin}>구글 계정으로 로그인 하세요</button>
    </Container>
  );
}
