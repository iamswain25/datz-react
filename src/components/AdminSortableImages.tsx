import { css } from "emotion";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactSortable } from "react-sortablejs";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { Param, SortableItemType } from "../@type/admin";
import { Publication } from "../@type";
import convert2ItemType from "../utils/convert2ItemType";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useParams } from "react-router-dom";
const field = "images";

export default function AdminSortableImages(props: { item: any }) {
  const { item } = props;
  const { register, setValue } = useFormContext<Publication>();
  const { collection } = useParams<Param>();
  const fields = item[field];
  const [list, setList] = React.useState<SortableItemType[]>(
    convert2ItemType(fields)
  );
  const setList2 = (newList: SortableItemType[]) => {
    setValue(
      field,
      newList.map((v) => v.id)
    );
    setList(newList);
  };
  const removeItem = (index: number) => {
    list.splice(index, 1);
    setList([...list]);
    setValue(
      field,
      list.map((v) => v.id)
    );
  };
  const file2Sortable = React.useCallback(
    (file: File) => {
      const name = file.name.replace(/\s/g, "-") || "default";
      const id = `/${collection}/${item.id}/${name}`;
      return { id, name } as SortableItemType;
    },
    [collection, item]
  );
  const fieldRef = React.useRef<HTMLInputElement | null>();
  const { ref, onChange, ...rest } = register("files.images");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (e.target.files?.length) {
      const incomingFiles = Array.from(e.target.files).map(file2Sortable);
      console.log([...incomingFiles, ...list]);
      setList2([...incomingFiles, ...list]);
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
            <button type="button" onClick={() => fieldRef.current?.click()}>
              ↑ upload
            </button>
            <input
              type="file"
              multiple
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
          </li>
        </ul>
      </div>
      <ReactSortable list={list} setList={setList2} handle=".js-draggable">
        {list.map((item, index) => (
          <div
            key={`key-id-${item.id}`}
            className={css`
              display: flex;
              align-items: center;
              height: 36px;
              border-bottom: solid 1px #cccccc;
            `}
          >
            <MenuIcon
              fontSize="small"
              className={clsx(
                "js-draggable",
                css`
                  cursor: move;
                `
              )}
            />
            <input
              type="checkbox"
              {...register(field)}
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
    </section>
  );
}
