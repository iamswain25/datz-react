import { Grid } from "@material-ui/core";
import { css } from "emotion";
import React from "react";
type Child = { title: string };
type Item = { title: string; children: Child[]; visible?: boolean };
const defaultList: Item[] = [
  {
    title: "Main Page",
    children: [
      { title: "Main gallery" },
      { title: "Wide gallery" },
      { title: "Vertical gallery" },
      { title: "External links" },
    ],
  },
  {
    title: "Publication",
    children: [
      { title: "Contents" },
      { title: "Banner" },
      { title: "Category" },
    ],
  },
  {
    title: "Exhibition",
    children: [{ title: "Contents" }, { title: "Banner" }],
  },
  {
    title: "Events",
    children: [{ title: "Contents" }, { title: "Banner" }],
  },
  {
    title: "Artist",
    children: [{ title: "Contents" }, { title: "Banner" }],
  },
  {
    title: "Artist projects",
    children: [
      { title: "Main gallery" },
      { title: "Book Project" },
      { title: "Exhibition" },
      { title: "Datz Artist Residency" },
    ],
  },
  {
    title: "About",
    children: [],
  },
  {
    title: "Contact",
    children: [
      { title: "Stockist" },
      { title: "Collections" },
      { title: "etc." },
    ],
  },
  {
    title: "News",
    children: [{ title: "Contents" }, { title: "Link" }],
  },
  {
    title: "Support",
    children: [{ title: "Main gallery" }, { title: "Membership" }],
  },
];
const makeUl = (setList: React.Dispatch<React.SetStateAction<Item[]>>) => (
  item: Item,
  index1: number
) => {
  const makeLi = (child: Child, index2: number) => {
    return (
      <li key={`react-key-${item.title}-${index1}-${child.title}-${index2}`}>
        {child.title}
      </li>
    );
  };
  return (
    <div key={`react-key-${item.title}-${index1}`}>
      <Grid container justify="space-between" alignItems="center">
        <Grid
          item
          className={css`
            font-size: 22px;
            font-weight: 500;
            line-height: 1.23;
            color: #afafaf;
          `}
        >
          {item.title}
        </Grid>
        <Grid
          item
          className={css`
            font-size: 14px;
            font-weight: 500;
            line-height: 1.21;
            text-align: right;
            color: #afafaf;
          `}
        >
          <button
            onClick={() =>
              setList((l) => {
                l[index1].visible = !l[index1].visible;
                return [...l];
              })
            }
          >
            hide
          </button>
        </Grid>
      </Grid>
      {item.visible && (
        <ul
          className={css`
            flex-direction: column;
          `}
        >
          {item.children.map(makeLi)}
        </ul>
      )}
    </div>
  );
};

export default function AdminMenu() {
  const [list, setList] = React.useState(defaultList);
  return <section>{list.map(makeUl(setList))}</section>;
}
