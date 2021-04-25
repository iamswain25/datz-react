import { Grid } from "@material-ui/core";
import { css } from "emotion";
import React from "react";
import { useParams } from "react-router";
import { Child, Item, Param } from "../@type/admin";
import Link from "./Link";

const defaultList: Item[] = [
  {
    title: "Main Page",
    id: "main",
    children: [
      { title: "Main gallery", id: "publication" },
      { title: "Wide gallery", id: "exhibition" },
      { title: "Vertical gallery", id: "event" },
      // { title: "External links", id: "link" },
    ],
  },
  {
    title: "Publication",
    id: "publication",
    children: [
      { title: "Contents", id: "contents" },
      { title: "Banner", id: "banner" },
      { title: "Category", id: "publication_category" },
    ],
  },
  {
    title: "Exhibition",
    id: "exhibition",
    children: [
      { title: "Contents", id: "contents" },
      { title: "Banner", id: "banner" },
    ],
  },
  {
    title: "Events",
    id: "event",
    children: [
      { title: "Contents", id: "contents" },
      { title: "Banner", id: "banner" },
    ],
  },
  {
    title: "Artist",
    id: "artist",
    children: [
      { title: "Contents", id: "contents" },
      //   { title: "Banner", id: "banner" },
    ],
  },
  {
    title: "Artist projects",
    id: "artist-project",
    children: [
      { title: "Main gallery", id: "top" },
      { title: "Book", id: "book" },
      { title: "Project", id: "projects" },
      { title: "Exhibition", id: "exhibition" },
      { title: "Datz Artist Residency", id: "residency" },
      { title: "Facilities", id: "facilities" },
    ],
  },
  {
    title: "About",
    id: "about",
    children: [{ title: "about", id: "contents" }],
  },
  {
    title: "Contact",
    id: "contact",
    children: [
      { title: "Stockist", id: "stockist" },
      { title: "Collections", id: "collections" },
      { title: "etc.", id: "etc" },
    ],
  },
  {
    title: "News",
    id: "news",
    children: [
      { title: "Contents", id: "contents" },
      // { title: "Link", id: "link" },
    ],
  },
  {
    title: "Support",
    id: "support",
    children: [
      { title: "Main gallery", id: "main" },
      { title: "Membership", id: "membership" },
    ],
  },
];
const makeUl = (
  setList: React.Dispatch<React.SetStateAction<Item[]>>,
  params: Param
) => (item: Item, index1: number) => {
  const makeLi = (child: Child, index2: number) => {
    const selected = item.id === params.collection && child.id === params.type;
    const color = selected ? "#4b4b4b" : "#afafaf";
    return (
      <li
        key={`react-key-${item.title}-${index1}-${child.title}-${index2}`}
        className={css`
          margin-top: 9px;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.35;
          text-align: left;
          text-decoration: ${selected ? "underline" : "normal"};
          color: ${color};
        `}
      >
        <Link to={`/admin/${item.id}/${child.id}`}>{child.title}</Link>
      </li>
    );
  };
  const color = item.id === params.collection ? "#4b4b4b" : "#afafaf";

  return (
    <div
      key={`react-key-${item.title}-${index1}`}
      className={css`
        padding-top: 28px;
      `}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={css`
          border-bottom: 1px solid #4b4b4b;
          padding-bottom: 9px;
          margin-bottom: 8px;
        `}
      >
        <Grid
          item
          className={css`
            font-size: 22px;
            font-weight: 500;
            line-height: 1.23;
            color: ${color};
          `}
        >
          {item.title}
        </Grid>
        <Grid item>
          <button
            className={
              item.visible
                ? css`
                    font-size: 14px;
                    font-weight: 500;
                    color: ${color};
                  `
                : css`
                    font-size: 24px;
                    color: ${color};
                  `
            }
            onClick={() =>
              setList((l) => {
                l[index1].visible = !l[index1].visible;
                return [...l];
              })
            }
          >
            {item.visible ? "hide" : ">"}
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
  const params = useParams<Param>();
  return (
    <section
      className={css`
        padding-left: 48px;
        margin-bottom: 100px;
      `}
    >
      {list.map(makeUl(setList, params))}
    </section>
  );
}
