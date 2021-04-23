import React from "react";
import { Grid } from "@material-ui/core";
import { css } from "emotion";
import AdminHeader from "../components/AdminHeader";
import AdminMenu from "../components/AdminMenu";
import AdminCollectionList from "../components/AdminCollectionList";
import AdminItemPublication from "../components/AdminItemPublication";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import AdminItemExhibition from "../components/AdminItemExhibition";
import { useAdminItem } from "../store/useGlobalState";
import AdminItemEvent from "../components/AdminItemEvent";
import AdminItemArtist from "../components/AdminItemArtist";
import AdminItemNews from "../components/AdminItemNews";

export default function AdminHome() {
  const { collection, type } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  React.useEffect(() => {
    if (type && collection) {
      setAdminItem(undefined);
    }
  }, [collection, type, setAdminItem]);
  const list = () => {
    switch (type) {
      case "contents":
        return <AdminCollectionList />;
      case "banner":
        return <AdminCollectionList />;
    }
  };
  const item = () => {
    switch (collection) {
      case "publication":
        return <AdminItemPublication />;
      case "exhibition":
        return <AdminItemExhibition />;
      case "event":
        return <AdminItemEvent />;
      case "artist":
        return <AdminItemArtist />;
      case "news":
        return <AdminItemNews />;
    }
  };
  return (
    <section
      className={css`
        background-color: #d8d8d8;
      `}
    >
      <AdminHeader />
      <section
        className={css`
          padding: 12px;
        `}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <AdminMenu />
          </Grid>
          <Grid item xs={4}>
            {!!collection && list()}
          </Grid>
          <Grid item xs={5}>
            {item()}
          </Grid>
        </Grid>
      </section>
    </section>
  );
}
