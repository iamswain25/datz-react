import React from "react";
import { css } from "emotion";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { Publication } from "../@type";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
export default function AdminCollectionList() {
  const { type, collection } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  const [items] = useCollectionDataOnce<Publication>(
    firestore
      .collection(type === "banner" ? type : collection)
      .orderBy("order", "desc"),
    { idField: "id" }
  );

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
          text-transform: capitalize;
        `}
      >
        ({collection.substr(0, 1)}){type}
      </div>
      <ul
        className={css`
          flex-direction: column;
        `}
      >
        {items?.map((item: any) => (
          <li
            key={item.id}
            className={css`
              padding: 9px 2px;
              border-bottom: solid 1px #cccccc;
            `}
          >
            <button
              onClick={() => setAdminItem(item)}
              className={css`
                font-size: 16px;
                text-decoration: ${item.public === false
                  ? "line-through"
                  : "none"};
              `}
            >
              {item.id}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
