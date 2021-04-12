import { css } from "emotion";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Modal } from "@material-ui/core";
import { Controller, UseFormReturn } from "react-hook-form";
import LinkPluginEditor3 from "./LinkPluginEditor3";

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
export default function AdminModalEdit(props: {
  item: any;
  field: string;
  formControl: UseFormReturn<any>;
}) {
  const {
    field,
    item,
    formControl: { control },
  } = props;
  const [isVisible, setVisible] = React.useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className={css`
          width: 50px;
          text-align: right;
          font-size: 14px;
          font-weight: 500;
          color: #707070;
        `}
      >
        <EditIcon fontSize="small" />
      </button>
      <Modal open={isVisible} onClose={() => setVisible(false)}>
        <div
          className={css`
            width: 80%;
            height: 90%;
            margin: auto;
            overflow: hidden;
            background-color: #fff;
          `}
        >
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
        </div>
      </Modal>
    </div>
  );
}
