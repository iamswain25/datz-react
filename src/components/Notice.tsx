import { css } from "emotion";
import firebase from "firebase";
import React from "react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import Close from "../assets/svg/Close";
import { firestore } from "../config/firebase";
import { useGlobalLang, useNotice } from "../store/useGlobalState";
import useDesktop from "./useDesktop";
const DATZ_LAST_NOTICE_ID = "DATZ_LAST_NOTICE_ID";
export default function Notice() {
  const [lang] = useGlobalLang();
  const localId = window.localStorage.getItem(DATZ_LAST_NOTICE_ID);
  const [snapshot] = useCollectionOnce(
    firestore.collection("notice").orderBy("order", "asc").limit(1)
  );
  const [notice, setNotice] = useNotice();
  const isDesktop = useDesktop();
  React.useEffect(() => {
    const fireNotice = snapshot?.docs?.[0];
    if (fireNotice) {
      setNotice({
        ...fireNotice.data(),
        id: fireNotice.id,
        ref: fireNotice.ref,
      });
    }
  }, [snapshot, setNotice]);
  if (!notice?.public) return null;
  if (notice?.id === localId) return null;
  function remove() {
    if (notice) {
      window.localStorage.setItem(DATZ_LAST_NOTICE_ID, notice.id);
      notice.ref?.update({
        count_close: firebase.firestore.FieldValue.increment(1),
      });
      setNotice(undefined);
    }
  }
  return (
    <header
      className={css`
        height: ${isDesktop ? "50px" : "auto"};
        overflow: hidden;
        display: flex;
        padding: ${isDesktop ? 0 : 30}px ${isDesktop ? 37 : 17}px;
        background-color: #ffffb0;
        box-sizing: border-box;
        align-items: center;
        color: #383838;
        font-size: 16px;
        position: relative;
      `}
    >
      <div
        className={css`
          position: absolute;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
          overflow: hidden;
        `}
      >
        {notice?.[lang]}
      </div>
      <button
        type="button"
        onClick={remove}
        className={css`
          font-family: datz-regular;
          font-size: 14px;
          display: flex;
          align-items: center;
        `}
      >
        <Close
          color="#383838"
          className={css`
            width: 12px;
            height: 12px;
            margin-left: ${isDesktop ? 16 : 5}px;
            margin-right: 7px;
          `}
        />
        <div>close</div>
      </button>
    </header>
  );
}
