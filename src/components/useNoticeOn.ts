import React from "react";
import { firestore } from "../config/firebase";
import { Notice, useNotice } from "../store/useGlobalState";
export const DATZ_LAST_NOTICE_ID = "DATZ_LAST_NOTICE_ID";
export default function useNoticeOn() {
  const [notice, setNotice] = useNotice();
  React.useEffect(() => {
    const localId = window.localStorage.getItem(DATZ_LAST_NOTICE_ID);
    firestore
      .collection("notice")
      .orderBy("order", "asc")
      .limit(1)
      .get()
      .then((snapshot) => {
        console.log("useNoticeOn");
        const fireNotice = snapshot?.docs?.[0];
        if (fireNotice) {
          const notice = fireNotice.data() as Notice;
          notice.id = fireNotice.id;
          notice.ref = fireNotice.ref;
          console.log("useNoticeOn, fireNotice", notice, localId);
          if (notice?.id !== localId && notice?.public) {
            setNotice(notice);
          }
        }
      });
    // eslint-disable-next-line
  }, []);
  return { notice };
}
