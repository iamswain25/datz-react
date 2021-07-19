import React from "react";
import path from "path";
import { css } from "emotion";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import { Banner } from "../@type";
import { IconButton } from "@material-ui/core";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
import { useAdminItem } from "../store/useGlobalState";
import { formOptionRequired } from "../utils/required";
import FormErrorMessage from "./FormErrorMessage";
const field = "image";

export default function AdminImage() {
  const [item] = useAdminItem();
  const {
    register,
    setValue,
    control,
    clearErrors,
    formState: { errors },
  } = useFormContext<Banner>();
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
              const name = file?.name?.replace(/\s/g, "-") || "image";
              setValue(field, `/${collection}/${item.id}/${name}`);
              onChange(file);
              clearErrors(field);
            }}
            initialValue={item[field] || ""}
          />
        )}
        name="files.image"
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
  const [item] = useAdminItem();
  const { type, collection } = useParams<Param>();
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
  }, [type, collection, item]);
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    ...rest,
  });

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
          *Image
        </span>
        <button
          type="button"
          onClick={open}
          className={css`
            outline: none;
          `}
        >
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
          <span title={initialValue}>{path.basename(initialValue || "")}</span>
        )}
      </div>
    </section>
  );
};
