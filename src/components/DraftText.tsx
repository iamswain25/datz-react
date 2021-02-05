import { css } from "emotion";
import React from "react";
import { useLocation } from "react-router-dom";
import { firestore } from "../config/firebase";
import { Lang } from "../store/useGlobalState";
import useLang from "./useLang";
function save(args: { item: any; lang: Lang; draft: string }) {
  const { item, lang, draft } = args;
  if (window.confirm("저장하겠습니까?")) {
    firestore
      .collection(item.collection)
      .doc(item.id)
      .update({ ["text_" + lang]: draft })
      .then(() => window.alert("저장 성공"))
      .catch(window.alert);
  }
}
export default function DraftText({ item }: { item?: any }) {
  const { text } = item || {};
  const lang = useLang()[2];
  const { pathname } = useLocation();
  const [draft, setDraft] = React.useState<string>();
  React.useEffect(() => {
    setDraft(text);
  }, [text]);
  function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDraft(event.currentTarget.value);
  }
  function saveHanler() {
    if (draft) {
      // console.log(item);
      save({ item, lang, draft });
    }
  }
  if (pathname.startsWith("/admin/")) {
    return (
      <>
        <div
          className={css`
            position: relative;
          `}
        >
          <div>{draft}</div>
          <textarea
            value={draft}
            onChange={changeHandler}
            className={css`
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              text-align: inherit;
              line-height: inherit;
              margin-top: inherit;
              white-space: inherit;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            `}
          />
        </div>
        <button
          className={css`
            color: red;
          `}
          onClick={saveHanler}
        >
          save
        </button>
      </>
    );
  }
  return item?.text ?? null;
}
