import { css } from "emotion";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Hr10 from "./Hr10";
import { IconButton } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import CloseIcon from "@material-ui/icons/Close";
import { useAdminItem } from "../store/useGlobalState";
import FormErrorMessage from "./FormErrorMessage";
import LinkPluginEditor4 from "./LinkPluginEditor4";
import { ContentState, convertToRaw, RawDraftContentState } from "draft-js";
import { KeyboardEventHandler } from "react";
export const draftFieldConverter = new Map();
draftFieldConverter.set("notes_en", "noteDraft_en");
draftFieldConverter.set("notes_ko", "noteDraft_ko");
draftFieldConverter.set("body_ko", "bodyDraft_ko");
draftFieldConverter.set("body_en", "bodyDraft_en");
draftFieldConverter.set("noteDraft_en", "notes_en");
draftFieldConverter.set("noteDraft_ko", "notes_ko");
draftFieldConverter.set("bodyDraft_ko", "body_ko");
draftFieldConverter.set("bodyDraft_en", "body_en");
export default function AdminLine(props: {
  field: string;
  required?: boolean | string;
  disabled?: boolean;
  alias?: string;
  defaultValue?: any;
}) {
  const [item] = useAdminItem();
  const {
    field,
    required = false,
    disabled = false,
    alias,
    defaultValue,
  } = props;
  const {
    control,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [isVisible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(item.updated_by === null ? true : false);
  }, [item]);
  const toggleVisible = React.useCallback(
    () => setVisible((v) => !v),
    [setVisible]
  );
  const reg = register(field, { required });
  const ref = React.useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const openVisible = React.useCallback(() => setVisible(true), [setVisible]);
  const keyupHandler: KeyboardEventHandler<HTMLTextAreaElement> =
    React.useCallback(
      (event: any) => {
        if (event.code === "Escape") {
          setVisible(false);
          ref.current?.setSelectionRange(0, 0);
        }
      },
      [setVisible]
    );

  const isDraft = Boolean(draftFieldConverter.get(field));
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        background-color: ${disabled ? "#cccccc" : "inherit"};
        padding: 8px 0;
        border-bottom: solid 1px #cccccc;
      `}
    >
      <span
        className={css`
          min-width: 100px;
          width: 100px;
          color: #4b4b4b;
        `}
      >
        {!!required && "*"}
        {alias ?? field}
      </span>
      <Hr10 />
      {isDraft ? (
        <>
          <Controller
            control={control}
            name={draftFieldConverter.get(field)}
            defaultValue={item?.[draftFieldConverter.get(field)]}
            rules={{ required }}
            render={({
              field: { onChange, name },
            }: {
              field: {
                value: RawDraftContentState;
                onChange: (rawContentState: RawDraftContentState) => void;
                name: string;
              };
            }) => {
              const onChangeDraft = (contentState: ContentState) => {
                onChange(convertToRaw(contentState));
                setValue(field, contentState.getPlainText());
                clearErrors(field);
              };
              return (
                <LinkPluginEditor4
                  field={name}
                  onChange={onChangeDraft}
                  visible={isVisible}
                  keyup={keyupHandler}
                />
              );
            }}
          />
          <input
            type={"text"}
            className={css`
              outline: none;
              font-size: inherit;
              color: #707070;
              -webkit-line-clamp: 1;
              display: ${isVisible ? "none" : "-webkit-box"};
              -webkit-box-orient: vertical;
              overflow: hidden;
              flex: 1;
            `}
            {...reg}
            defaultValue={defaultValue}
            onDoubleClick={openVisible}
            readOnly
          />
        </>
      ) : (
        <TextareaAutosize
          className={css`
            outline: none;
            font-size: inherit;
            color: #707070;
            flex: 1;
            line-height: 1.2;
            padding: 2px;
          `}
          {...reg}
          ref={(r) => {
            reg.ref(r);
            ref.current = r;
          }}
          maxRows={isVisible ? undefined : 1}
          defaultValue={defaultValue}
          onDoubleClick={openVisible}
          readOnly={!isVisible || disabled}
          onKeyUp={keyupHandler}
        />
      )}
      {!disabled && (
        <IconButton
          onClick={toggleVisible}
          style={{ padding: 1, alignSelf: "flex-start" }}
        >
          {isVisible ? (
            <CloseIcon style={{ fontSize: 18 }} />
          ) : (
            <span
              className={css`
                padding: 3px;
                font-size: 14px;
                font-weight: 500;
                color: #707070;
              `}
            >
              ✎
            </span>
          )}
        </IconButton>
      )}
      <FormErrorMessage errors={errors} name={field} />
    </div>
  );
}
