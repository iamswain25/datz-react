import { css } from "emotion";
import React from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { SortableItemType } from "../@type/admin";
import { firestore } from "../config/firebase";
import convert2ItemType from "../utils/convert2ItemType";

export default function AdminModalList(props: {
  list?: SortableItemType[];
  collection: string;
  setList: (newList: SortableItemType[]) => void;
}) {
  const { collection, list, setList } = props;
  const flatList = React.useMemo(() => list?.map((l) => l.id), [list]);
  const [items] = useCollectionDataOnce<any>(
    firestore.collection(collection).orderBy("order", "desc"),
    { idField: "id" }
  );
  console.log(collection, list);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.value;
    if (event.target.checked) {
      flatList?.unshift(id);
      setList(convert2ItemType(flatList));
    } else {
      const searchIndex = flatList?.indexOf(id);
      if (typeof searchIndex === "number") {
        flatList?.splice(searchIndex, 1);
        setList(convert2ItemType(flatList));
      }
    }
  };
  return (
    <ul
      className={css`
        flex-direction: column;
        flex-wrap: wrap;
        padding: 24px;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
      `}
    >
      <h1>{collection}</h1>
      {items?.map((item) => (
        <li key={`key-${collection}-${item.id}`}>
          <input
            type="checkbox"
            name={collection}
            value={item.id}
            onChange={changeHandler}
            id={`for-${collection}-${item.id}`}
            defaultChecked={flatList?.includes(item.id)}
            className={css`
              margin-right: 8px;
            `}
          />
          <label htmlFor={`for-${collection}-${item.id}`}>{item.id}</label>
        </li>
      ))}
    </ul>
  );
}
