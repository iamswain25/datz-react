import React from "react";
import { firestore } from "../config/firebase";
import { SortEnd } from "react-sortable-hoc";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import lastAdminWrite from "./lastAdminWrite";
export default function useSortEnd({
  orderBy,
  items,
}: {
  orderBy: "asc" | "desc";
  items?: any[];
}) {
  const { collection } = useParams<Param>();
  const confirm = React.useCallback(
    async (oldIndex, order) => {
      if (!items) return;
      if (window.confirm("순서 변경 하시겠습니까?")) {
        // console.log({ oldIndex, newIndex, order });
        const item = items[oldIndex];
        if (!item) return;
        const { id } = item;
        await Promise.all([
          firestore.collection(collection).doc(id).update({ order }),
          lastAdminWrite(),
        ]);
      }
    },
    [items, collection]
  );
  if (orderBy === "asc") {
    return async ({ oldIndex, newIndex }: SortEnd) => {
      if (!items) return;
      if (oldIndex === newIndex) return;
      let order = null;
      if (oldIndex < newIndex) {
        const prev = items[newIndex];
        const next = items[newIndex + 1];
        if (next) {
          order = (prev.order + next.order) / 2;
        } else {
          order = prev.order + 100;
        }
      } else {
        const prev = items[newIndex - 1];
        const next = items[newIndex];
        if (prev) {
          order = (prev.order + next.order) / 2;
        } else {
          order = next.order - 100;
        }
      }
      confirm(oldIndex, order);
    };
  } else {
    return async ({ oldIndex, newIndex }: SortEnd) => {
      if (!items) return;
      if (oldIndex === newIndex) return;
      let order = null;
      if (oldIndex < newIndex) {
        const prev = items[newIndex];
        const next = items[newIndex + 1];
        if (next) {
          order = (prev.order + next.order) / 2;
        } else {
          order = prev.order - 100;
        }
      } else {
        const prev = items[newIndex - 1];
        const next = items[newIndex];
        if (prev) {
          order = (prev.order + next.order) / 2;
        } else {
          order = next.order + 100;
        }
      }
      confirm(oldIndex, order);
    };
  }
}
