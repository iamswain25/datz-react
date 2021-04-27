import { css } from "emotion";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Hr10 from "./Hr10";
import LinkPluginEditor3 from "./LinkPluginEditor3";
import { IconButton } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import CloseIcon from "@material-ui/icons/Close";
import { useAdminItem } from "../store/useGlobalState";
import FormErrorMessage from "./FormErrorMessage";
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
    formState: { errors },
  } = useFormContext();
  const [isVisible, setVisible] = React.useState(false);
  const toggleVisible = React.useCallback(() => setVisible((v) => !v), [
    setVisible,
  ]);
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
      {!isVisible ? (
        <input
          type="text"
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
          readOnly
        />
      ) : ["notes_en", "notes_ko", "body_en", "body_ko"].includes(field) ? (
        <Controller
          control={control}
          name={getDraftName(field)}
          defaultValue={item[field] || ""}
          rules={{ required }}
          render={({ field: { value, onChange } }) => {
            const onChange2 = (event: any) => {
              onChange(event);
              const pureText = event.blocks
                .map((block: any) => (!block.text.trim() && "\n") || block.text)
                .join("\n");
              // console.log(pureText);
              setValue(field, pureText);
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
            flex: 1;
          `}
          {...register(field, { required })}
          defaultValue={item[field] || ""}
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
            <EditIcon style={{ fontSize: 18 }} />
          )}
        </IconButton>
      )}
      <FormErrorMessage errors={errors} name={field} />
    </div>
  );
}
