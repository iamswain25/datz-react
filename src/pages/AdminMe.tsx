import { Container } from "@material-ui/core";
import { css } from "emotion";
import React from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../config/firebase";

export default function AdminMe() {
  const [doc] = useDocumentDataOnce<any>(
    firestore.collection("users").doc(auth.currentUser?.uid),
    { idField: "id" }
  );
  return (
    <Container maxWidth="sm">
      <h1>관리자 정보</h1>
      <a href="/admin">관리자 페이지로 이동</a>
      <ul
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <li>
          <img src={auth.currentUser?.photoURL || ""} alt="photoUrl" />
        </li>
        <li>{auth.currentUser?.email}</li>
        <li>{auth.currentUser?.displayName}</li>
        <li>편집권한: {String(doc?.admin)}</li>
        <li>
          <button onClick={() => auth.signOut()}>logout</button>
        </li>
      </ul>
    </Container>
  );
}
