import { css } from "emotion";
import React from "react";
import Hr10 from "./Hr10";
import { Controller, useFormContext } from "react-hook-form";
const transform: {
  output: (arg: React.ChangeEvent<HTMLInputElement>) => boolean;
} = {
  output: (e) => e.target.value === "1",
};
export default function AdminItemPublic({
  duplicate,
  noPublic = false,
}: {
  duplicate?: (...args: any[]) => void;
  noPublic?: boolean;
}) {
  const { control, watch } = useFormContext();
  const refSubmitButtom = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    function handler(e: KeyboardEvent) {
      console.log(e.code);
      if (
        (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
        e.code === "KeyS"
      ) {
        e.preventDefault();
        console.log("save");
        refSubmitButtom?.current?.click();
        // Process the event here (such as click on submit button)
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isNew = watch("created_by");
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        padding-bottom: 9px;
        border-bottom: 1px solid #707070;
        text-transform: capitalize;
        margin-bottom: 13px;
      `}
    >
      {noPublic ? (
        <div />
      ) : (
        <Controller
          name="public"
          defaultValue={false}
          render={({ field }) => {
            return (
              <ul>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => field.onChange(transform.output(e))}
                    // value={transform.input(field.value)}
                    value={1}
                    checked={field.value}
                    className={css`
                      width: 12px;
                      height: 12px;
                      border: solid 1px #707070;
                      margin-right: 9px;
                    `}
                    id="radio-public-true"
                  />
                  <label htmlFor="radio-public-true">Public</label>
                </li>
                <li
                  className={css`
                    margin-left: 19px;
                  `}
                >
                  <input
                    type="radio"
                    onChange={(e) => field.onChange(transform.output(e))}
                    value={0}
                    checked={!field.value}
                    className={css`
                      width: 12px;
                      height: 12px;
                      border: solid 1px #707070;
                      margin-right: 9px;
                    `}
                    id="radio-public-false"
                  />
                  <label htmlFor="radio-public-false">Private</label>
                </li>
              </ul>
            );
          }}
          control={control}
        />
      )}
      <div
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        {!!duplicate && (
          <>
            <button
              type="button"
              onClick={duplicate}
              className={css`
                font-size: 16px;
                font-weight: 500;
                color: #707070;
              `}
            >
              +Duplicate
            </button>
            <Hr10 />
          </>
        )}
        <button
          ref={refSubmitButtom}
          type="submit"
          className={css`
            font-size: 16px;
            font-weight: 500;
            color: #707070;
          `}
        >
          ✓ {isNew === null ? "Create" : "Update"}
        </button>
      </div>
    </div>
  );
}
