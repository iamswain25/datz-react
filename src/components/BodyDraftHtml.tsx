import React from "react";
import { convertFromRaw, EditorState, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import { decorators } from "../utils/decorator";

export default function BodyDraftHtml({ item }: { item: any }) {
  const { body, bodyDraft } = item;
  if (bodyDraft) {
    const state = EditorState.createWithContent(
      convertFromRaw(bodyDraft),
      decorators
    );
    return <Editor readOnly editorState={state} onChange={() => {}} />;
  }
  return <div children={body} />;
}
