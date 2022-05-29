import React from "react";
import firebase from "firebase/app";
import { firestore } from "../config/firebase";
import { useNotice } from "../store/useGlobalState";
export const DATZ_LAST_NOTICE_ID = "DATZ_LAST_NOTICE_ID";
export interface Notice {
  created_at: any;
  en: string;
  ko: string;
  id: string;
  ref?: firebase.firestore.DocumentReference;
  public: boolean;
}
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
