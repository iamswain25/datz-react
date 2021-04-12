import React, { KeyboardEvent } from "react";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin, { defaultTheme } from "@draft-js-plugins/anchor";
import PluginEditor from "@draft-js-plugins/editor";
import { EditorState, RichUtils } from "draft-js";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
const linkPlugin = createLinkPlugin({
  placeholder: "https://",
  linkTarget: "_blank",
  theme: defaultTheme,
});
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
export default function LinkPluginEditor({ editorState, onChange }: any) {
  const ref = React.useRef<null | PluginEditor>(null);
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
        ref={(element) => {
          ref.current = element;
        }}
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
