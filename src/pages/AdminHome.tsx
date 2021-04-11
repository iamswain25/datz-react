import React from "react";
import { Grid } from "@material-ui/core";
import { css } from "emotion";
import AdminHeader from "../components/AdminHeader";
import AdminMenu from "../components/AdminMenu";
import AdminCollectionList from "../components/AdminCollectionList";
import AdminPublicationItem from "../components/AdminPublicationItem";

export default function AdminHome() {
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
            <AdminCollectionList />
          </Grid>
          <Grid item xs={5}>
            <AdminPublicationItem />
          </Grid>
        </Grid>
      </section>
    </section>
  );
}
