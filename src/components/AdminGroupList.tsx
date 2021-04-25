import { css } from "emotion";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  SortEnd,
} from "react-sortable-hoc";
import MenuIcon from "@material-ui/icons/Menu";
import AdminArrayLine from "./AdminArrayLine";
export default function AdminGroupList(props: { title: string }) {
  const { title } = props;
  const { control } = useFormContext();
  const { fields, swap, prepend } = useFieldArray({
    control,
    name: "list",
  });
  const onSortEnd = async ({ oldIndex, newIndex }: SortEnd) => {
    swap(oldIndex, newIndex);
  };
  const prependHandler = () => {
    prepend({ title_en: "", title_ko: "", url: "" }, { shouldFocus: true });
  };
  return (
    <section
      className={css`
        font-size: 16px;
        font-weight: 500;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          padding-bottom: 7px;
          border-bottom: 1px solid #707070;
          text-transform: capitalize;
          margin-bottom: 2px;
          margin-top: 45px;
        `}
      >
        <span
          className={css`
            font-size: 16px;
            font-weight: 500;
            color: #4b4b4b;
          `}
        >
          {title}
        </span>
        <div>
          <button
            type="button"
            onClick={prependHandler}
            className={css`
              width: 50px;
              text-align: right;
              font-size: 14px;
              font-weight: 500;
              color: #707070;
            `}
          >
            Create New
          </button>
        </div>
      </div>
      <div>
        <SortableList items={fields} onSortEnd={onSortEnd} useDragHandle />
      </div>
    </section>
  );
}
const DragHandle = SortableHandle(() => (
  <MenuIcon
    className={css`
      font-size: 16px !important;
      cursor: move;
    `}
  />
));
const SortableItem = SortableElement((props: any) => {
  const { item, sortIndex } = props;
  return (
    <li
      key={item.id}
      className={css`
        display: flex;
        padding: 9px 2px;
      `}
    >
      <div
        className={css`
          padding: 10px 0;
          margin-right: 12px;
        `}
      >
        <DragHandle />
      </div>
      <div
        className={css`
          flex: 1;
        `}
      >
        <AdminArrayLine field={`list.${sortIndex}.title_en`} alias="title_en" />
        <AdminArrayLine field={`list.${sortIndex}.title_ko`} alias="title_ko" />
        <AdminArrayLine field={`list.${sortIndex}.url`} alias="link" />
      </div>
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
            sortIndex={index}
          />
        );
      })}
    </ul>
  );
});
