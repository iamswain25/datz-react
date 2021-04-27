import React from "react";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import { Publication } from "../@type";
import { Param } from "../@type/admin";
import { useAdminOrder } from "../store/useGlobalState";
import useFireSubscription from "../utils/useFireSubscription";
import useSortEnd from "../utils/useSortEnd";
import SortableList from "./SortableList";
export default function AdminList() {
  const { type, collection } = useParams<Param>();
  const [items] = useFireSubscription<Publication>();
  const [isEditing, setEditing] = useAdminOrder();
  const onSortEnd = useSortEnd(items);
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
        {type === "etc" ||
        (items && items.length === 1) ||
        collection === "about" ? (
          <div />
        ) : (
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
        )}
      </div>
      <SortableList
        items={items}
        onSortEnd={onSortEnd}
        useDragHandle
        noRemove={
          type === "publication_category" ||
          ["about", "artist-project", "contact"].includes(collection)
        }
      />
    </section>
  );
}
