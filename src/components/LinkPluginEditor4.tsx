import React, { KeyboardEvent } from "react";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin, { defaultTheme } from "@draft-js-plugins/anchor";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from "draft-js";
import { useDebouncedCallback } from "use-debounce";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
import { css } from "emotion";
const linkPlugin = createLinkPlugin({
  placeholder: "https://",
  linkTarget: "_blank",
  theme: defaultTheme,
});
const incomingConvert = (value: any) => {
  // console.log(value);
  if (typeof value === "object") {
    return EditorState.createWithContent(convertFromRaw(value));
  } else {
    return createEditorStateWithText(value || "");
  }
};

export default function LinkPluginEditor4({ value, onChange }: any) {
  const [InlineToolbar, plugins] = React.useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    const { InlineToolbar } = inlineToolbarPlugin;
    const plugins = [inlineToolbarPlugin, linkPlugin];
    return [InlineToolbar, plugins];
  }, []);

  const [state, setState] = React.useState<EditorState>(incomingConvert(value));
  const editor = React.useRef<Editor>(null);
  React.useEffect(() => {
    if (
      JSON.stringify(value) !==
      JSON.stringify(convertToRaw(state.getCurrentContent()))
    ) {
      console.log("CHANGE", JSON.stringify(value));
      setState(incomingConvert(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const saveCb = useDebouncedCallback(() => {
    const json = JSON.stringify(convertToRaw(state.getCurrentContent()));
    if (JSON.stringify(value) !== json) {
      console.log("SAVE", json);
      onChange(state.getCurrentContent());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 500);
  React.useEffect(() => saveCb(), [state, saveCb]);

  function handleReturn(e: KeyboardEvent, editorState: EditorState) {
    if (e.shiftKey) {
      return "not-handled";
    }
    setState(RichUtils.insertSoftNewline(editorState));
    return "handled";
  }

  const focus = (): void => editor.current?.focus();
  return (
    <div
      className={css`
        position: relative;
        flex: 1;
      `}
      onClick={focus}
    >
      <Editor
        editorState={state}
        onChange={setState}
        plugins={plugins}
        handleReturn={handleReturn}
        ref={editor}
        stripPastedStyles={true}
      />
      <InlineToolbar
        children={(externalProps) => (
          <>
            <linkPlugin.LinkButton {...(externalProps as any)} />
          </>
        )}
      />
    </div>
  );
}
