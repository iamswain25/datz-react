import { css } from "emotion";
import React from "react";
import { RelationType } from "../@type/admin";
import AdminSortable from "./AdminSortable";

export default function AdminGroup(props: {
  title: string;
  item: any;
  fields: RelationType[];
}) {
  const { title, fields, item } = props;
  const [isVisible, setVisible] = React.useState(true);
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
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className={css`
            width: 50px;
            text-align: right;
            font-size: 14px;
            font-weight: 500;
            color: #707070;
          `}
        >
          {isVisible ? "hide" : ">"}
        </button>
      </div>
      {isVisible && (
        <div>
          {fields.map((field) => (
            <AdminSortable
              key={`key-related-${field}`}
              field={field}
              item={item}
            />
          ))}
        </div>
      )}
    </section>
  );
}
