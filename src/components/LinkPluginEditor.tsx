import React, { KeyboardEvent } from "react";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createLinkPlugin from "draft-js-anchor-plugin";
import PluginEditor from "draft-js-plugins-editor";
import { EditorState, RichUtils } from "draft-js";
// import { DraftJsStyleButtonProps } from "draft-js-buttons";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import { css } from "emotion";
const linkPlugin = createLinkPlugin({
  placeholder: "https://",
  linkTarget: "_blank",
  theme: {
    link: css`
      color: #2996da;
      text-decoration: underline;
    `,
  },
});
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
export default function LinkPluginEditor({ editorState, onChange }: any) {
  const ref = React.useRef<undefined | PluginEditor>(undefined);
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
  if (!editorState) return null;
  return (
    <div style={{ position: "relative" }} onClick={focus}>
      <PluginEditor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        handleReturn={handleReturn}
      />
      <InlineToolbar>
        {(externalProps) => (
          <React.Fragment>
            <linkPlugin.LinkButton {...(externalProps as any)} />
          </React.Fragment>
        )}
      </InlineToolbar>
    </div>
  );
}
