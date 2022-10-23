import React from "react";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin, { defaultTheme } from "@draft-js-plugins/anchor";
import PluginEditor, {
  createEditorStateWithText,
} from "@draft-js-plugins/editor";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useDebouncedCallback } from "use-debounce";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
import { css } from "emotion";
const incomingConvert = (value: any) => {
  // console.log("incomingConvert", value);
  if (typeof value === "object") {
    return EditorState.createWithContent(convertFromRaw(value));
  } else {
    return createEditorStateWithText(value || "");
  }
};
export default function LinkPluginEditor4({
  value,
  onChange,
  visible,
  keyup,
}: any) {
  const editorRef = React.useRef<PluginEditor>(null);
  const { InlineToolbar, plugins, linkPlugin } = React.useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    const { InlineToolbar } = inlineToolbarPlugin;
    const linkPlugin = createLinkPlugin({
      placeholder: "https://",
      linkTarget: "_blank",
      theme: {
        ...defaultTheme,
        link: css`
          text-decoration: underline;
        `,
      },
    });
    const plugins = [inlineToolbarPlugin, linkPlugin];
    return { InlineToolbar, plugins, linkPlugin };
  }, []);
  const [state, setState] = React.useState<EditorState>(() =>
    incomingConvert(value)
  );

  React.useEffect(() => {
    if (
      JSON.stringify(value) !==
      JSON.stringify(convertToRaw(state.getCurrentContent()))
    ) {
      console.log("useEffect");
      setState(incomingConvert(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const saveCb = useDebouncedCallback(() => {
    const json = JSON.stringify(convertToRaw(state.getCurrentContent()));
    // console.log(json);
    if (JSON.stringify(value) !== json) {
      console.log("saveCb");
      onChange(state.getCurrentContent());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 500);
  React.useEffect(() => {
    if (!state.getDecorator()) {
      editorRef.current?.componentDidMount();
    }
    saveCb();
  }, [state, saveCb]);
  return (
    <div
      className={css`
        position: relative;
        flex: 1;
        display: ${visible ? "block" : "none"};
        color: #707070;
      `}
    >
      <PluginEditor
        ref={editorRef}
        editorState={state}
        onChange={setState}
        plugins={plugins}
        stripPastedStyles={true}
        keyBindingFn={keyup}
      />
      <InlineToolbar
        children={(externalProps) => (
          <div>
            <linkPlugin.LinkButton {...(externalProps as any)} />
          </div>
        )}
      />
    </div>
  );
}
