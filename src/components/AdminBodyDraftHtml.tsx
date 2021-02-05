import React from "react";
import useLang from "./useLang";
import LinkPluginEditor from "./LinkPluginEditor";
import { firestore } from "../config/firebase";
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import { css } from "emotion";
import { useLocation } from "react-router-dom";
export default function AdminBodyDraftHtml({ item }: { item: any }) {
  const lang = useLang()[2];
  const { pathname } = useLocation();

  const { body, id, bodyDraft } = item;
  const [editorState, setEditorState] = React.useState<EditorState | undefined>(
    undefined
  );
  React.useEffect(() => {
    if (bodyDraft) {
      setEditorState(EditorState.createWithContent(convertFromRaw(bodyDraft)));
    } else if (body) {
      setEditorState(
        EditorState.createWithContent(ContentState.createFromText(body))
      );
    }
  }, [body, bodyDraft]);
  function onChange(editorState: EditorState) {
    setEditorState(editorState);
  }
  function save() {
    if (window.confirm("저장하겠습니까?") && editorState) {
      const bodyDraft = convertToRaw(editorState.getCurrentContent());
      const body = bodyDraft.blocks
        .map((block) => (!block.text.trim() && "\n") || block.text)
        .join("\n");
      const collection = pathname.split("/")[2];
      firestore
        .collection(collection)
        .doc(id)
        .update({ ["bodyDraft_" + lang]: bodyDraft, ["body_" + lang]: body })
        .then(() => window.alert("저장 성공"))
        .catch(window.alert);
    }
  }
  return (
    <>
      <LinkPluginEditor onChange={onChange} editorState={editorState} />
      <button
        onClick={save}
        className={css`
          font-size: 14px;
          line-height: 1.21;
          text-align: center;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
          width: 100%;
          color: red;
        `}
      >
        save
      </button>
    </>
  );
}
