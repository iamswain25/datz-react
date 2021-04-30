import React from "react";
import { css } from "emotion";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  SortableContainer,
  SortableElement,
  SortEnd,
} from "react-sortable-hoc";
import AdminLine from "./AdminLine";
import { DragHandle } from "./SortableItem";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
export default function AdminGroupList(props: { title: string }) {
  const { title } = props;
  const { control } = useFormContext();
  const { fields, swap, prepend, remove } = useFieldArray({
    control,
    name: "list",
  });
  const onSortEnd = async ({ oldIndex, newIndex }: SortEnd) => {
    swap(oldIndex, newIndex);
  };
  const newHandler = () => {
    const item = { title_en: "", title_ko: "", url: "" };
    prepend(item, { shouldFocus: true });
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
            onClick={newHandler}
            className={css`
              width: 100px;
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
        <SortableList
          items={fields}
          onSortEnd={onSortEnd}
          useDragHandle
          remove={remove}
        />
      </div>
    </section>
  );
}

const SortableItem = SortableElement((props: any) => {
  const { item, sortIndex, remove } = props;
  return (
    <li
      key={`key-${item.id}`}
      className={css`
        display: flex;
        padding: 9px 2px;
      `}
    >
      <div
        className={css`
          padding: 10px 0;
          margin-right: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        `}
      >
        <DragHandle />
        <IconButton
          onClick={() => remove(sortIndex)}
          style={{ padding: 1, marginLeft: -5 }}
        >
          <CloseIcon style={{ fontSize: 18 }} />
        </IconButton>
      </div>
      <div
        className={css`
          flex: 1;
        `}
      >
        <AdminLine
          field={`list.${sortIndex}.title_en`}
          alias="title_en"
          defaultValue={item.title_en}
        />
        <AdminLine
          field={`list.${sortIndex}.title_ko`}
          alias="title_ko"
          defaultValue={item.title_ko}
        />
        <AdminLine
          field={`list.${sortIndex}.url`}
          alias="link"
          defaultValue={item.url}
        />
      </div>
    </li>
  );
});
const SortableList = SortableContainer(({ items, remove }: any) => {
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
            remove={remove}
          />
        );
      })}
    </ul>
  );
});
