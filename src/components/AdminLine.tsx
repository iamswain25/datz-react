import { css } from "emotion";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Hr10 from "./Hr10";
import LinkPluginEditor3 from "./LinkPluginEditor3";
import { IconButton } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
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
      return "";
  }
};
export default function AdminLine(props: {
  field: string;
  item: any;
  required?: boolean;
  alias?: string;
  formControl: UseFormReturn<any>;
}) {
  const {
    field,
    item,
    required = false,
    alias,
    formControl: { control, register },
  } = props;
  const [isVisible, setVisible] = React.useState(false);
  const toggleVisible = React.useCallback(() => setVisible((v) => !v), [
    setVisible,
  ]);
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        height: ${isVisible ? "auto" : "36px"};
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
        {required && "*"}
        {alias ?? field}
      </span>
      <Hr10 />
      {!isVisible ? (
        <span
          className={css`
            font-size: inherit;
            color: #707070;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            flex: 1;
          `}
        >
          {item[field]}
        </span>
      ) : ["notes_en", "notes_ko", "body_en", "body_ko"].includes(field) ? (
        <Controller
          control={control}
          name={getDraftName(field)}
          defaultValue={item[field]}
          render={({ field: { value, onChange } }) => {
            const onChange2 = (event: any) => {
              onChange(event);
              return setVisible(false);
            };
            return <LinkPluginEditor3 value={value} onChange={onChange2} />;
          }}
        />
      ) : (
        <TextareaAutosize
          className={css`
            font-size: inherit;
            color: #707070;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            flex: 1;
          `}
          {...register(field)}
          defaultValue={item[field]}
        />
      )}
      <IconButton onClick={toggleVisible}>
        <EditIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
