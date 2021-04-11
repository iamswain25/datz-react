import { css } from "emotion";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import Hr10 from "./Hr10";

export default function AdminLine(props: {
  field: string;
  item: any;
  required?: boolean;
  alias?: string;
  formControl?: UseFormReturn<any>;
}) {
  const { field, item, required = false, alias, formControl } = props;
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        height: 36px;
        border-bottom: solid 1px #cccccc;
      `}
    >
      <span
        className={css`
          min-width: 100px;
          width: 100px;
          color: #4b4b4b;
        `}
      >
        {required && "*"}
        {alias ?? field}
      </span>
      <Hr10 />
      {formControl ? (
        <input
          className={css`
            font-size: inherit;
            color: #707070;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            flex: 1;
          `}
          {...formControl.register(field)}
          defaultValue={item[field]}
        />
      ) : (
        <span
          className={css`
            font-size: inherit;
            color: #707070;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            flex: 1;
          `}
        >
          {item[field]}
        </span>
      )}
    </div>
  );
}
