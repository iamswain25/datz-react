import { Grid } from "@material-ui/core";
import { css } from "emotion";
import React from "react";
import { useHistory, useParams } from "react-router";
import { Child, Item, Param } from "../@type/admin";
import Link from "./Link";

const defaultList: Item[] = [
  {
    title: "Notice",
    id: "notice",
    children: [{ title: "Contents", id: "" }],
  },
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
    title: "Artist Projects",
    id: "artist-project",
    children: [
      { title: "Main gallery", id: "top" },
      { title: "Book Project", id: "book" },
      { title: " - Project", id: "projects" },
      { title: "Datz Artist Residency", id: "residency" },
      { title: " - Facilities", id: "facilities" },
      { title: "Exhibition", id: "exhibition" },
    ],
  },
  {
    title: "About",
    id: "about",
    children: [
      { title: "Datz Press", id: "datzpress" },
      { title: "D’Ark Room", id: "darkroom" },
      { title: "Datz Museum of Art", id: "datzmuseum" },
      { title: "etc.", id: "etc" },
    ],
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
  params: Param,
  push: (path: string, state?: unknown) => void
) => (item: Item, index1: number) => {
  const makeLi = (child: Child, index2: number) => {
    const { type = "" } = params;
    const selected = item.id === params.collection && child.id === type;
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
      <button
        type="button"
        className={css`
          width: 100%;
        `}
        onClick={() => {
          setList((l) => {
            l[index1].visible = !l[index1].visible;
            if (l[index1].visible) {
              const collection = l[index1].id;
              const type = l[index1].children[0].id;
              window.setTimeout(() => push(`/admin/${collection}/${type}`), 1);
            }
            return [...l];
          });
        }}
      >
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={css`
            border-bottom: 1px solid ${color};
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
            <span
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
            >
              {item.visible ? "hide" : ">"}
            </span>
          </Grid>
        </Grid>
      </button>
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
  const { push } = useHistory();
  return (
    <section
      className={css`
        padding-left: 48px;
        margin-bottom: 100px;
      `}
    >
      {list.map(makeUl(setList, params, push))}
    </section>
  );
}
