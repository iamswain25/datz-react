import React, { KeyboardEvent } from "react";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin from "@draft-js-plugins/anchor";
import Editor from "@draft-js-plugins/editor";
import { EditorState, RichUtils } from "draft-js";
import "@draft-js-plugins/anchor/lib/plugin.css";
import { css } from "emotion";
const linkPlugin = createLinkPlugin({
  placeholder: "https://",
  linkTarget: "_blank",
  theme: {
    link: css`
      color: #2996da;
      text-decoration: underline;
    `,
    input: "",
    inputInvalid: "",
  },
});
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
export default function LinkPluginEditor4({ value, onChange }: any) {
  const ref = React.useRef<null | Editor>(null);
  function focus() {
    ref.current?.focus();
  }
  function handleReturn(e: KeyboardEvent, editorState: EditorState) {
    if (e.shiftKey) {
      return "not-handled";
    }
    onChange(RichUtils.insertSoftNewline(editorState));
    return "handled";
  }
  if (!value) return null;
  return (
    <div style={{ position: "relative" }} onClick={focus}>
      <Editor
        editorState={value}
        onChange={onChange}
        plugins={plugins}
        handleReturn={handleReturn}
        ref={(element) => {
          ref.current = element;
        }}
      />
      <InlineToolbar
        children={(externalProps) => (
          <React.Fragment>
            <linkPlugin.LinkButton {...(externalProps as any)} />
          </React.Fragment>
        )}
      />
    </div>
  );
}
