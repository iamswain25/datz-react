import React from "react";
import { css } from "emotion";
import useDesktop from "./useDesktop";
import PublicationCloseBtn from "./PublicationCloseBtn";
import { paddingH27, marginH27 } from "./styles";
import useLang from "./useLang";
import LinkPluginEditor from "./LinkPluginEditor";
import { firestore } from "../config/firebase";
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
const stickyContainer = css`
  margin-left: 20px;
  margin-right: 17px;
  font-family: BauerGroteskOTW03;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const mobileContainer = css`
  position: relative;
  ${paddingH27}
`;
export default function AdminEventItemRight({
  children,
  item,
}: {
  children?: any;
  item: any;
}) {
  const isDesktop = useDesktop();
  const lang = useLang()[2];
  const { type, date, title, body, place, id, bodyDraft } = item;
  const [classes] = useLang("event");
  const [editorState, setEditorState] = React.useState<EditorState | undefined>(
    undefined
  );
  React.useEffect(() => {
    if (bodyDraft) {
      setEditorState(EditorState.createWithContent(convertFromRaw(bodyDraft)));
    } else if (body) {
      setEditorState(
        EditorState.createWithContent(ContentState.createFromText(body))
      );
    }
  }, [body, bodyDraft]);
  function onChange(editorState: EditorState) {
    setEditorState(editorState);
  }
  function save() {
    if (window.confirm("저장하겠습니까?") && editorState) {
      const bodyDraft = convertToRaw(editorState.getCurrentContent());
      // const body = draftToHtml(raw);
      firestore
        .collection("event")
        .doc(id)
        .update({ ["bodyDraft_" + lang]: bodyDraft });
    }
  }
  return (
    <div className={isDesktop ? stickyContainer : undefined}>
      {isDesktop && <PublicationCloseBtn noClose />}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
      >
        <div
          className={css`
            text-align: center;
            color: #707070;
            ${isDesktop ? undefined : mobileContainer}
            margin-bottom: ${isDesktop ? 0 : 17}px;
          `}
        >
          <div className={classes.type}>{type}</div>
          <div className={classes.date}>{date}</div>
          <div className={classes.place}>{place}</div>
        </div>
        {children}
        <section
          className={
            isDesktop
              ? css`
                  flex: 1;
                `
              : mobileContainer
          }
        >
          <div className={classes.title}>{title}</div>
          <div className={classes.body}>
            <LinkPluginEditor onChange={onChange} editorState={editorState} />
          </div>
        </section>
        <div
          className={css`
            ${isDesktop ? undefined : marginH27}
            border-top: solid 1px #707070;
            text-align: center;
          `}
        >
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
              width: 100%;
            `}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
