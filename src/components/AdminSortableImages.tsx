import { css } from "emotion";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactSortable } from "react-sortablejs";
import clsx from "clsx";
import { UseFormReturn } from "react-hook-form";
import { SortableItemType } from "../@type/admin";
import { Publication } from "../@type";
import convert2ItemType from "../utils/convert2ItemType";

const field = "images";
export default function AdminSortableImages(props: {
  item: any;
  formControl: UseFormReturn<Publication>;
}) {
  const {
    item,
    formControl: { register, setValue },
  } = props;
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
            <button>Delete all</button>
          </li>
          <li
            className={css`
              margin-left: 20px;
            `}
          >
            <button>↑ upload</button>
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
              `}
              children={item.id}
            />
          </div>
        ))}
      </ReactSortable>
    </section>
  );
}
