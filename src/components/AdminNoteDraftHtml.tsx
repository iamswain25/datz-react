import React from "react";
import useLang from "./useLang";
import LinkPluginEditor2 from "./LinkPluginEditor2";
import { firestore } from "../config/firebase";
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import { css } from "emotion";
import { useLocation } from "react-router-dom";
export default function AdminNoteDraftHtml({ item }: { item: any }) {
  const lang = useLang()[2];
  const { pathname } = useLocation();

  const { notes, id, noteDraft } = item;
  const [editorState, setEditorState] = React.useState<EditorState | undefined>(
    undefined
  );
  React.useEffect(() => {
    if (noteDraft) {
      setEditorState(EditorState.createWithContent(convertFromRaw(noteDraft)));
    } else if (notes) {
      setEditorState(
        EditorState.createWithContent(ContentState.createFromText(notes))
      );
    }
  }, [notes, noteDraft]);
  function onChange(editorState: EditorState) {
    setEditorState(editorState);
  }
  function save() {
    if (window.confirm("저장하겠습니까?") && editorState) {
      const noteDraft = convertToRaw(editorState.getCurrentContent());
      const notes = noteDraft.blocks
        .map((block) => (!block.text.trim() && "\n") || block.text)
        .join("\n");
      const collection = pathname.split("/")[2];
      firestore
        .collection(collection)
        .doc(id)
        .update({ ["noteDraft_" + lang]: noteDraft, ["notes_" + lang]: notes })
        .then(() => window.alert("저장 성공"))
        .catch(window.alert);
    }
  }
  return (
    <>
      <LinkPluginEditor2 onChange={onChange} editorState={editorState} />
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
