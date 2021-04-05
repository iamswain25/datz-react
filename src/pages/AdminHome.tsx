import React from "react";
import { Grid } from "@material-ui/core";
import { css } from "emotion";
import AdminHeader from "../components/AdminHeader";
import AdminMenu from "../components/AdminMenu";

export default function AdminHome() {
  return (
    <>
      <AdminHeader />
      <section
        className={css`
          padding: 12px;
        `}
      >
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <AdminMenu />
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </section>
    </>
  );
}
