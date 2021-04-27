import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import { Publication } from "../@type";
import { Param } from "../@type/admin";
import { useAdminItem, useAdminOrder } from "../store/useGlobalState";
import useFireSubscription from "../utils/useFireSubscription";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import useTrashItem from "../utils/useTrashItem";
import useSortEnd from "../utils/useSortEnd";
const DragHandle = SortableHandle(() => (
  <MenuIcon
    className={css`
      font-size: 16px !important;
      cursor: move;
    `}
  />
));
const SortableItem = SortableElement(({ item, sortLength = 1 }: any) => {
  const [selectedItem, setAdminItem] = useAdminItem();
  const [isEditing] = useAdminOrder();
  const trashItem = useTrashItem(item);
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
      {sortLength > 1 && (
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
});
const SortableList = SortableContainer(({ items }: any) => {
  return (
    <ul
      className={css`
        flex-direction: column;
      `}
    >
      {items?.map((item: any, index: number) => {
        return (
          <SortableItem
            key={`item-${item.id}`}
            index={index}
            item={item}
            sortLength={items.length}
          />
        );
      })}
    </ul>
  );
});
export default function AdminCollectionList() {
  const { type, collection } = useParams<Param>();
  const [isEditing, setEditing] = useAdminOrder();
  const [items] = useFireSubscription<Publication>();
  const onSortEnd = useSortEnd({ orderBy: "desc", items });
  const startEditing = () => {
    setEditing(true);
  };
  const saveOrder = () => {
    setEditing(false);
  };
  return (
    <section
      className={css`
        background-color: #ececec;
        font-size: 16px;
        font-weight: 500;
        color: #4b4b4b;
        padding: 37px 15px;
      `}
    >
      <div
        className={css`
          padding-bottom: 9px;
          border-bottom: 1px solid #707070;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <span
          className={css`
            text-transform: capitalize;
          `}
        >
          ({collection.substr(0, 1)}){type}
        </span>
        <div>
          <button
            onClick={isEditing ? saveOrder : startEditing}
            type="button"
            className={css`
              font-size: inherit;
              font-weight: inherit;
              color: #707070;
            `}
          >
            {isEditing ? "✓ Finish order" : "≡ Edit order"}
          </button>
        </div>
      </div>
      <SortableList items={items} onSortEnd={onSortEnd} useDragHandle />
    </section>
  );
}
