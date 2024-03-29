import React from "react";
import path from "path";
import { css } from "emotion";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import { Publication } from "../@type";
import { IconButton } from "@material-ui/core";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
import { useAdminItem } from "../store/useGlobalState";
import FormErrorMessage from "./FormErrorMessage";
import { formOptionRequired } from "../utils/required";
const field = "image_cover";

export default function AdminImageCover() {
  const [item] = useAdminItem();
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext<Publication>();
  const { collection } = useParams<Param>();
  return (
    <>
      <Controller
        render={({ field: { onChange } }) => (
          <Dropzone
            noClick
            multiple={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!e) {
                setValue(field, item[field] || "");
                onChange(undefined);
                return;
              }
              const file = e?.target?.files?.[0];
              const name = file?.name?.replace(/\s/g, "-") || "cover";
              setValue(field, `/${collection}/${item.id}/${name}`);
              onChange(file);
            }}
            initialValue={item[field] || ""}
          />
        )}
        name="files.image_cover"
        control={control}
      />
      <input
        type="hidden"
        readOnly
        defaultValue={item[field] || ""}
        {...register(field, formOptionRequired)}
      />
      <FormErrorMessage errors={errors} name={field} />
    </>
  );
}

type OnChange = (e: any) => any;
const Dropzone = ({
  multiple,
  onChange: onChange2,
  initialValue,
  ...rest
}: DropzoneOptions & { onChange: OnChange; initialValue?: string }) => {
  const [myFile, setMyFile] = React.useState<File>();
  const { type, collection } = useParams<Param>();
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    ...rest,
  });
  const onChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setMyFile(file);
    onChange2(e);
  };
  const remove = () => {
    onChange(undefined);
  };
  React.useEffect(() => {
    remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, collection]);
  return (
    <section
      {...getRootProps()}
      className={css`
        font-size: 16px;
        font-weight: 500;
        margin-top: 9px;
      `}
    >
      <input {...getInputProps({ onChange })} />
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
        <button type="button" onClick={open}>
          ↑ upload
        </button>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          height: 36px;
          border-bottom: solid 1px #cccccc;
          color: #707070;
        `}
      >
        {myFile ? (
          <>
            <span
              className={css`
                flex: 1;
              `}
            >
              {myFile?.name?.replace(/\s/g, "-") || "cover"}
            </span>
            <IconButton onClick={remove} style={{ padding: 1 }}>
              <CloseIcon style={{ fontSize: 18 }} />
            </IconButton>
          </>
        ) : (
          <span>{path.basename(initialValue || "")}</span>
        )}
      </div>
    </section>
  );
};
