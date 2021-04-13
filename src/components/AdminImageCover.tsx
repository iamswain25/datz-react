import { css } from "emotion";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Publication } from "../@type";
import { IconButton } from "@material-ui/core";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
const field = "image_cover";

export default function AdminImageCover(props: {
  item: any;
  formControl: UseFormReturn<Publication>;
}) {
  const {
    item,
    formControl: { register, setValue, watch },
  } = props;
  const fieldRef = React.useRef<HTMLInputElement | null>();
  const files = watch("files.image_cover");
  const { collection } = useParams<Param>();
  const { ref, onChange, ...rest } = register("files.image_cover");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setValue(field, `/${collection}/${item.id}/cover`);
  };
  return (
    <section
      className={css`
        font-size: 16px;
        font-weight: 500;
        margin-top: 9px;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          padding-bottom: 7px;
          border-bottom: 1px solid #707070;
        `}
      >
        <span
          className={css`
            font-size: 16px;
            font-weight: 500;
            color: #4b4b4b;
          `}
        >
          *Thumbnail
        </span>
        <button type="button" onClick={() => fieldRef.current?.click()}>
          ↑ upload
        </button>
      </div>
      <div
        className={css`
          display: ${files ? "flex" : "none"};
          align-items: center;
          height: 36px;
          border-bottom: solid 1px #cccccc;
        `}
      >
        <input
          type="file"
          multiple={false}
          onChange={changeHandler}
          ref={(e) => {
            ref(e);
            fieldRef.current = e;
          }}
          className={css`
            display: none;
          `}
          {...rest}
        />
        <input
          type="text"
          readOnly
          defaultValue={item[field]}
          {...register(field)}
          className={css`
            flex: 1;
            font-size: inherit;
            color: #707070;
          `}
        />
        <IconButton
          onClick={() => {
            setValue(field, "");
            setValue("files.image_cover", undefined);
          }}
          style={{ padding: 1 }}
        >
          <CloseIcon style={{ fontSize: 18 }} />
        </IconButton>
      </div>
    </section>
  );
}
