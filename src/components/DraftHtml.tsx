import React from "react";
import { convertFromRaw, EditorState, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import { decorators } from "../utils/decorator";
import Linkify from "./Linkify";

export default function DraftHtml({
  item,
  type,
}: {
  item: any;
  type: "body" | "note";
}) {
  if (type === "body") {
    const { body, bodyDraft } = item;
    if (bodyDraft) {
      const state = EditorState.createWithContent(
        convertFromRaw(bodyDraft),
        decorators
      );
      return <Editor readOnly editorState={state} onChange={() => {}} />;
    }
    return <Linkify children={body} />;
  }
  if (type === "note") {
    const { notes, noteDraft } = item;
    if (noteDraft) {
      const state = EditorState.createWithContent(
        convertFromRaw(noteDraft),
        decorators
      );
      return <Editor readOnly editorState={state} onChange={() => {}} />;
    }
    return <Linkify children={notes} />;
  }
  return null;
}
