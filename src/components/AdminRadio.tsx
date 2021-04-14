import { css } from "emotion";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useAdminItem } from "../store/useGlobalState";
import Hr10 from "./Hr10";
export default function AdminRadio(props: {
  field: string;
  required?: boolean;
  values: string[];
  alias?: string;
}) {
  const [item] = useAdminItem();
  const { field, required = false, alias, values } = props;
  const formControl = useFormContext();
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
      {values.map((value) => (
        <div
          key={`radio-${field}-${value}`}
          className={css`
            margin-right: 30px;
          `}
        >
          <input
            type="radio"
            {...formControl?.register(field)}
            value={value}
            defaultChecked={item[field] === value}
            id={`radio-${field}-${value}`}
            className={css`
              margin-right: 5px;
            `}
          />
          <label
            htmlFor={`radio-${field}-${value}`}
            className={css`
              font-size: 13px;
              color: #707070;
            `}
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  );
}