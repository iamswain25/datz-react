import React from "react";
import { css } from "emotion";
import UpcomingWidget from "./UpcomingWidget";
import HomeEventCard from "./HomeEventCard";
import useDesktop from "./useDesktop";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import useNews from "../utils/useNews";
export default function HomeEventRight() {
  const isDesktop = useDesktop();
  const [items] = useCollectionDataOnce<any>(
    firestore.collection("news").orderBy("order", "desc").limit(1),
    { idField: "id" }
  );
  const list = useNews(items);
  return (
    <>
      <HomeEventCard item={list?.[0]} type="event" />
      <div
        className={css`
          padding: 0 ${isDesktop ? 0 : 21}px;
        `}
      >
        <UpcomingWidget />
      </div>
    </>
  );
}
