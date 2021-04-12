import React, { KeyboardEvent } from "react";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin, { defaultTheme } from "@draft-js-plugins/anchor";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from "draft-js";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
const linkPlugin = createLinkPlugin({
  placeholder: "https://",
  linkTarget: "_blank",
  theme: defaultTheme,
});
const incomingConvert = (value: any) => {
  if (typeof value === "object") {
    return EditorState.createWithContent(convertFromRaw(value));
  } else {
    return createEditorStateWithText(value);
  }
};
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
export default function LinkPluginEditor3({ value, onChange }: any) {
  const [state, setState] = React.useState<EditorState>(incomingConvert(value));
  const editor = React.useRef<Editor>(null);
  React.useEffect(() => {
    setState(incomingConvert(value));
  }, [value]);
  function handleReturn(e: KeyboardEvent, editorState: EditorState) {
    if (e.shiftKey) {
      return "not-handled";
    }
    setState(RichUtils.insertSoftNewline(editorState));
    return "handled";
  }
  function saveHandler() {
    const json = convertToRaw(state.getCurrentContent());
    // console.log(json);
    onChange(json);
  }

  const focus = (): void => editor.current?.focus();

  if (!value) return null;
  return (
    <div style={{ position: "relative" }} onClick={focus}>
      <Editor
        editorState={state}
        onChange={setState}
        plugins={plugins}
        handleReturn={handleReturn}
        ref={editor}
      />
      <InlineToolbar
        children={(externalProps) => (
          <>
            <linkPlugin.LinkButton {...(externalProps as any)} />
          </>
        )}
      />
      <button onClick={saveHandler}>change (not saved)</button>
    </div>
  );
}
