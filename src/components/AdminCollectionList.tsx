import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  SortEnd,
} from "react-sortable-hoc";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import { Publication } from "../@type";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem, useAdminOrder } from "../store/useGlobalState";
import useFireSubscription from "../utils/useFireSubscription";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import useTrashItem from "../utils/useTrashItem";
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
  const startEditing = () => {
    setEditing(true);
  };
  const saveOrder = () => {
    setEditing(false);
  };
  const onSortEnd = async ({ oldIndex, newIndex }: SortEnd) => {
    if (!items) return;
    if (oldIndex === newIndex) return;
    // console.log(oldIndex, newIndex);
    let order = null;
    if (oldIndex < newIndex) {
      const prev = items[newIndex];
      const next = items[newIndex + 1];
      if (next) {
        order = (prev.order + next.order) / 2;
      } else {
        order = prev.order - 100;
      }
    } else {
      const prev = items[newIndex - 1];
      const next = items[newIndex];
      if (prev) {
        order = (prev.order + next.order) / 2;
      } else {
        order = next.order + 100;
      }
    }

    if (window.confirm("순서 변경 하시겠습니까?")) {
      // console.log({ oldIndex, newIndex, order });
      const item = items[oldIndex];
      if (!item) return;
      const { id } = item;
      await firestore.collection(collection).doc(id).update({ order });
    }
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
