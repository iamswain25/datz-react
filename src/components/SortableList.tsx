import { css } from "emotion";
import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = SortableContainer(
  ({ items, noRemove = false }: { items?: any[]; noRemove?: boolean }) => {
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
              noRemove={noRemove}
            />
          );
        })}
      </ul>
    );
  }
);
export default SortableList;
