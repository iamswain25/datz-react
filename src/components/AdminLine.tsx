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
import { ContentState, convertToRaw } from "draft-js";
import { Publication } from "../@type";
const getDraftName = (field: string) => {
  switch (field) {
    case "notes_en":
      return "noteDraft_en";
    case "notes_ko":
      return "noteDraft_ko";
    case "body_ko":
      return "bodyDraft_ko";
    case "body_en":
      return "bodyDraft_en";
    default:
      return undefined;
  }
};
export default function AdminLine(props: {
  field: string;
  required?: boolean | string;
  disabled?: boolean;
  alias?: string;
}) {
  const [item] = useAdminItem();
  const { field, required = false, disabled = false, alias } = props;
  const {
    control,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [isVisible, setVisible] = React.useState(
    item.updated_by === null ? true : false
  );
  React.useEffect(() => {
    setVisible(item.updated_by === null ? true : false);
  }, [item]);
  const toggleVisible = React.useCallback(() => setVisible((v) => !v), [
    setVisible,
  ]);
  const openVisible = React.useCallback(() => setVisible(true), [setVisible]);
  const isDraft = React.useMemo(() => Boolean(getDraftName(field)), [field]);
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
            name={getDraftName(field) as keyof Publication}
            defaultValue={item[field] || ""}
            rules={{ required }}
            render={({ field: { value, onChange } }) => {
              const onChange2 = (contentState: ContentState) => {
                onChange(convertToRaw(contentState));
                setValue(field, contentState.getPlainText());
                clearErrors(field);
              };
              return (
                <LinkPluginEditor4
                  value={value || item[field]}
                  onChange={onChange2}
                  visible={isVisible}
                />
              );
            }}
          />
          <input
            type={isVisible ? "hidden" : "text"}
            className={css`
              font-size: inherit;
              color: #707070;
              -webkit-line-clamp: 1;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
              flex: 1;
            `}
            {...register(field, { required })}
            defaultValue={item[field] || ""}
            onDoubleClick={openVisible}
            readOnly
          />
        </>
      ) : (
        <TextareaAutosize
          className={css`
            font-size: inherit;
            color: #707070;
            flex: 1;
            line-height: 1.2;
            padding: 2px;
          `}
          {...register(field, { required })}
          maxRows={isVisible ? undefined : 1}
          defaultValue={item[field] || ""}
          onDoubleClick={openVisible}
          readOnly={!isVisible}
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
