import { css } from "emotion";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import { Param, SortableItemType } from "../@type/admin";
import { Publication } from "../@type";
import { uniqBy, convert2ItemType } from "../utils/convert2ItemType";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useParams } from "react-router-dom";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useAdminItem } from "../store/useGlobalState";
import FormErrorMessage from "./FormErrorMessage";
import { formOptionRequired } from "../utils/required";
export default function AdminSortableImages(props: {
  field?: "images" | "image";
}) {
  const { field = "images" } = props;
  const [item] = useAdminItem();
  const {
    register,
    setValue,
    control,
    clearErrors,
    formState: { errors },
  } = useFormContext<Publication>();
  const { collection } = useParams<Param>();
  const fields = item[field];
  const [list, setList] = React.useState<SortableItemType[]>(
    convert2ItemType(fields)
  );
  const setList2 = (newList: SortableItemType[]) => {
    setValue(
      field as keyof Publication,
      newList.map((v) => v.id)
    );
    setList(newList);
  };
  const removeItem = (index: number) => {
    const isFile = (file?: File): file is File => !!file;
    list.splice(index, 1);
    setList([...list]);
    const files = list.map((l) => l.file).filter(isFile);
    setValue(`files.${field}` as keyof Publication, files);
    setValue(
      field as keyof Publication,
      list.map((v) => v.id)
    );
  };
  const file2Sortable = React.useCallback(
    (file: File) => {
      const name = file.name.replace(/\s/g, "-") || "default";
      const id = `/${collection}/${item.id}/${name}`;
      return { id, name, file } as SortableItemType;
    },
    [collection, item]
  );
  const changeHandler = (onChange: any) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.length) {
      const newFiles = Array.from(e.target.files);
      const incomingFiles = newFiles.map(file2Sortable);
      const mergedList = [...incomingFiles, ...list];
      const uniqueList = uniqBy(
        mergedList,
        (item: SortableItemType) => item.id
      );
      const files = uniqueList.filter((l) => l.file);
      setList2(uniqueList);
      onChange(files);
      clearErrors(field as keyof Publication);
    }
  };
  React.useEffect(() => {
    setList(convert2ItemType(fields));
  }, [fields]);
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
          {field}
        </span>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setList2([]);
                setValue(`files.${field}` as keyof Publication, []);
              }}
            >
              Delete all
            </button>
          </li>
          <li
            className={css`
              margin-left: 20px;
            `}
          >
            <Controller
              render={({ field: { onChange } }) => (
                <Dropzone noClick multiple onChange={changeHandler(onChange)} />
              )}
              name={`files.${field}` as keyof Publication}
              control={control}
              defaultValue={[]}
            />
          </li>
        </ul>
      </div>
      <ReactSortable list={list} setList={setList2} handle=".js-draggable">
        {list.map((item, index) => (
          <div
            key={`key-id-${item.id}`}
            title={item.id}
            className={css`
              display: flex;
              align-items: center;
              height: 36px;
              border-bottom: solid 1px #cccccc;
            `}
          >
            <span
              className={clsx(
                "js-draggable",
                css`
                  padding-right: 6px;
                  cursor: move;
                `
              )}
              children="≡"
            />
            <input
              type="checkbox"
              {...register(field as keyof Publication, formOptionRequired)}
              defaultValue={item.id}
              className={css`
                display: none;
              `}
            />
            <span
              className={css`
                color: #707070;
                -webkit-line-clamp: 1;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                flex: 1;
              `}
              children={item.name}
            />
            <IconButton
              onClick={() => {
                removeItem(index);
              }}
              style={{ padding: 1 }}
            >
              <CloseIcon style={{ fontSize: 18 }} />
            </IconButton>
          </div>
        ))}
      </ReactSortable>
      <FormErrorMessage errors={errors} name={field} />
    </section>
  );
}

type OnChange = (e: any) => any;
const Dropzone = ({
  onChange,
  ...rest
}: DropzoneOptions & { onChange: OnChange }) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    ...rest,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ onChange })} />
      <button type="button" onClick={open}>
        ↑ upload
      </button>
    </div>
  );
};
