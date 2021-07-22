import { css } from "emotion";
import React from "react";
import { useFormContext } from "react-hook-form";
import { formOptionRequired } from "../utils/required";
import FormErrorMessage from "./FormErrorMessage";
import Hr10 from "./Hr10";
export default function AdminRadio(props: {
  field: string;
  required?: boolean | string;
  values: string[] | { value: string; label: string }[];
  alias?: string;
}) {
  const { field, required = false, alias, values } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
        {!!required && "*"}
        {alias ?? field}
      </span>
      <Hr10 />
      <div
        className={css`
          display: flex;
          align-items: center;
          flex: 1;
        `}
      >
        {values.map((_: any) => {
          let value, label;
          if (typeof _ === "string") {
            value = _;
            label = _;
          } else {
            ({ value, label } = _);
          }
          return (
            <div
              key={`radio-${field}-${value}`}
              className={css`
                margin-right: 30px;
              `}
            >
              <input
                type="radio"
                {...register(field, formOptionRequired)}
                value={value}
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
                {label}
              </label>
            </div>
          );
        })}
      </div>
      <FormErrorMessage errors={errors} name={field} />
    </div>
  );
}
