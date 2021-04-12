import React from "react";
import { Modal } from "@material-ui/core";
import { css } from "emotion";
import { RelationType, SortableItemType } from "../@type/admin";
import AdminModalList from "./AdminModalList";

export default function AdminModalBtn(props: {
  list?: SortableItemType[];
  setList: (newList: SortableItemType[]) => void;
  field: RelationType;
}) {
  const { field } = props;
  const collection = React.useMemo(() => field.substring(4, field.length - 1), [
    field,
  ]);
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
        | List {">"}
      </button>
      <Modal open={isVisible} onClose={() => setVisible(false)}>
        <div
          className={css`
            width: 50%;
            height: 80%;
            margin: auto;
            overflow: hidden;
            background-color: #fff;
          `}
        >
          {isVisible && <AdminModalList {...props} collection={collection} />}
        </div>
      </Modal>
    </div>
  );
}
