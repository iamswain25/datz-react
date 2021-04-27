import { css } from "emotion";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { useAdminItem, useAdminOrder } from "../store/useGlobalState";
const SortableItem = SortableElement(({ item }: any) => {
  const [selectedItem, setAdminItem] = useAdminItem();
  const [isEditing] = useAdminOrder();
  return (
    <li
      key={item.id}
      className={css`
        display: flex;
        align-items: center;
        padding: 9px 2px;
        border-bottom: solid 1px #cccccc;
        background-color: ${selectedItem?.id === item.id ? "#ccc" : "inherit"};
      `}
    >
      {isEditing && <DragHandle />}
      <button
        onClick={() => setAdminItem(item)}
        className={css`
          flex: 1;
          text-align: left;
          font-size: 16px;
          text-decoration: ${item.public === false ? "line-through" : "none"};
        `}
      >
        {item.id}
      </button>
    </li>
  );
});
export default SortableItem;
const DragHandle = SortableHandle(() => (
  <MenuIcon
    className={css`
      font-size: 16px !important;
      cursor: move;
    `}
  />
));
