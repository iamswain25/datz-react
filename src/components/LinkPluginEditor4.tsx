import React from "react";
import createInlineToolbarPlugin, {
  ToolbarProps,
} from "@draft-js-plugins/inline-toolbar";
import createLinkPlugin, {
  AnchorPlugin,
  defaultTheme,
} from "@draft-js-plugins/anchor";
import PluginEditor from "@draft-js-plugins/editor";
import {
  ContentState,
  convertFromRaw,
  DraftDecoratorType,
  EditorState,
} from "draft-js";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
import { css } from "emotion";
import { useAdminItem } from "../store/useGlobalState";
import { draftFieldConverter } from "./AdminLine";
import _ from "lodash";
export default function LinkPluginEditor4(props: {
  onChange: (contentState: ContentState) => void;
  visible: boolean;
  keyup: any;
  field: string;
}) {
  const { onChange, field } = props;
  const editorRef = React.useRef<DraftLinkEditor>(null);
  const [item] = useAdminItem();
  React.useEffect(() => {
    console.log(1, "item");
    const theclass = editorRef.current;
    theclass?.promiseDeco.then((deco) => {
      // console.log("deco", deco);
      if (item?.[field]) {
        const contentState = convertFromRaw(item?.[field]);
        onChange(contentState);
        theclass?.setState({
          editorState: EditorState.createWithContent(contentState, deco),
        });
      } else {
        const covertedField = draftFieldConverter.get(field);
        const plainText = item?.[covertedField];
        if (plainText) {
          const contentState = ContentState.createFromText(plainText);
          onChange(contentState);
          theclass?.setState({
            editorState: EditorState.createWithContent(contentState, deco),
          });
        }
      }
      theclass.resolveDeco = undefined;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return <DraftLinkEditor {...props} ref={editorRef} />;
}

class DraftLinkEditor extends React.Component<
  {
    onChange: (contentState: ContentState) => void;
    visible: boolean;
    keyup: any;
    field: string;
  },
  { editorState: EditorState }
> {
  plugins: any[];
  InlineToolbar: React.ComponentType<ToolbarProps>;
  linkPlugin: AnchorPlugin;
  PluginEditorRef = React.createRef<PluginEditor>();
  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    const { InlineToolbar } = inlineToolbarPlugin;
    this.InlineToolbar = InlineToolbar;
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
    this.linkPlugin = linkPlugin;
    this.plugins = [inlineToolbarPlugin, linkPlugin];
    this.promiseDeco = new Promise((res) => {
      this.resolveDeco = res;
    });
  }
  debouncedSave = _.debounce((editorState: EditorState) => {
    // console.log("debouncedSave");
    this.props.onChange(editorState.getCurrentContent());
  }, 500);
  promiseDeco: Promise<DraftDecoratorType>;
  resolveDeco: ((deco: DraftDecoratorType) => void) | undefined;

  changeHandler = (editorState: EditorState) => {
    // console.log("changeHandler");
    this.setState({ editorState }, () => {
      const deco = this.state.editorState.getDecorator();
      if (this.resolveDeco && deco) {
        this.resolveDeco?.(deco);
      } else {
        // this.props.onChange(editorState.getCurrentContent());
        this.debouncedSave(editorState);
      }
    });
  };
  render() {
    const { visible, keyup } = this.props;
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
          ref={this.PluginEditorRef}
          editorState={this.state.editorState}
          onChange={this.changeHandler}
          plugins={this.plugins}
          stripPastedStyles={true}
          keyBindingFn={keyup}
        />
        <this.InlineToolbar
          children={(externalProps) => (
            <div>
              <this.linkPlugin.LinkButton {...(externalProps as any)} />
            </div>
          )}
        />
      </div>
    );
  }
}
