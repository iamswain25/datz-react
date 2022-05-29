import React from "react";
import firebase from "firebase/app";
import { useNotice } from "../store/useGlobalState";
import { DATZ_LAST_NOTICE_ID } from "./useNoticeOn";
export default function useNoticeRemove() {
  const [notice, setNotice] = useNotice();
  const remove = React.useCallback(() => {
    if (notice) {
      window.localStorage.setItem(DATZ_LAST_NOTICE_ID, notice.id);
      notice.ref?.update({
        count_close: firebase.firestore.FieldValue.increment(1),
      });
      setNotice(undefined);
    }
    // eslint-disable-next-line
  }, [notice]);
  return { remove, notice };
}
