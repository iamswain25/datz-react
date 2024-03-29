import React from "react";
import { css } from "emotion";
import { useParams } from "react-router-dom";
import { Publication } from "../@type";
import { Param } from "../@type/admin";
import { useAdminItem, useAdminOrder } from "../store/useGlobalState";
import useFireSubscription from "../utils/useFireSubscription";
import useSortEnd from "../utils/useSortEnd";
import SortableList from "./SortableList";
import Hr10 from "./Hr10";
import useCreateNew from "../utils/useCreateNew";
export default function AdminList() {
  const { type, collection } = useParams<Param>();
  const [items] = useFireSubscription<Publication>();
  const [isEditing, setEditing] = useAdminOrder();
  const [, setItem] = useAdminItem();
  const onSortEnd = useSortEnd(items);
  const createNewHandler = useCreateNew(items?.[0] || { order: 0 });
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
          margin-bottom: 13px;
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

        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          {type === "etc" ||
          (items && items.length === 1) ||
          (collection === "artist-project" && type === "exhibition") ||
          ["about", "support"].includes(collection) ? null : (
            <button
              onClick={() => {
                if (!isEditing) {
                  setItem(null);
                }
                setEditing((_) => !_);
              }}
              type="button"
              className={css`
                font-size: inherit;
                font-weight: inherit;
                color: #707070;
              `}
            >
              {isEditing ? "✓ Finish order" : "≡ Edit order"}
            </button>
          )}
          {["publication_category", "etc", "book", "residency"].includes(
            type
          ) ||
          (collection === "artist-project" && type === "exhibition") ||
          ["about", "support"].includes(collection) ? null : (
            <>
              <Hr10 />
              <button
                onClick={createNewHandler}
                type="button"
                className={css`
                  font-size: inherit;
                  font-weight: inherit;
                  color: #707070;
                `}
              >
                ✎ Create new
              </button>
            </>
          )}
        </div>
      </div>
      <SortableList
        items={items}
        onSortEnd={onSortEnd}
        useDragHandle
        noRemove={
          ["publication_category", "etc", "book", "residency"].includes(type) ||
          ["about", "support"].includes(collection) ||
          (collection === "artist-project" && type === "exhibition")
        }
      />
    </section>
  );
}
