import { css } from "emotion";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { useAdminItem, useAdminOrder } from "../store/useGlobalState";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import useTrashItem from "../utils/useTrashItem";
const SortableItem = SortableElement(
  ({
    item,
    noRemove = false,
    sortLength = 1,
  }: {
    item: any;
    noRemove?: boolean;
    sortLength: number;
  }) => {
    const [selectedItem, setAdminItem] = useAdminItem();
    const [isEditing, setEditing] = useAdminOrder();
    const trashItem = useTrashItem(item);
    function itemClickHandler() {
      setAdminItem(item);
      setEditing(false);
    }
    return (
      <li
        key={item.id}
        className={css`
          display: flex;
          align-items: center;
          padding: 9px 2px;
          border-bottom: solid 1px #cccccc;
          background-color: ${selectedItem?.id === item.id
            ? "#ccc"
            : "inherit"};
        `}
      >
        {isEditing && <DragHandle />}
        <button
          onClick={itemClickHandler}
          className={css`
            flex: 1;
            text-align: left;
            font-size: 16px;
            text-decoration: ${item.public === false ? "line-through" : "none"};
          `}
        >
          {item.id}
        </button>
        {sortLength > 1 && !noRemove && (
          <IconButton
            onClick={trashItem}
            className={css`
              padding: 2px !important;
            `}
          >
            <CloseIcon
              className={css`
                font-size: 16px !important;
              `}
            />
          </IconButton>
        )}
      </li>
    );
  }
);
export default SortableItem;
const DragHandle = SortableHandle(() => (
  <MenuIcon
    className={css`
      font-size: 16px !important;
      cursor: move;
    `}
  />
));
