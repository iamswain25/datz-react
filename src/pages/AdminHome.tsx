import React from "react";
import { Grid } from "@material-ui/core";
import { css } from "emotion";
import AdminHeader from "../components/AdminHeader";
import AdminMenu from "../components/AdminMenu";
import AdminItemPublication from "../components/AdminItemPublication";
import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import AdminItemExhibition from "../components/AdminItemExhibition";
import { useAdminItem } from "../store/useGlobalState";
import AdminItemEvent from "../components/AdminItemEvent";
import AdminItemArtist from "../components/AdminItemArtist";
import AdminItemNews from "../components/AdminItemNews";
import AdminItemBanner from "../components/AdminItemBanner";
import AdminItemCategory from "../components/AdminItemCategory";
import AdminItemMain from "../components/AdminItemMain";
import AdminList from "../components/AdminList";
import AdminItemArtistProject from "../components/AdminItemArtistProject";
import AdminItemContact from "../components/AdminItemContact";
import AdminItemAbout from "../components/AdminItemAbout";
import AdminItemSupport from "../components/AdminItemSupport";
import AdminItemNotice from "../components/AdminItemNotice";

export default function AdminHome() {
  const { collection, type } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  React.useEffect(() => {
    if (collection) {
      setAdminItem(undefined);
    }
  }, [collection, type, setAdminItem]);
  const [item] = React.useMemo(() => {
    const item = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      switch (type) {
        case "banner":
          return <AdminItemBanner />;
        case "publication_category":
          return <AdminItemCategory />;
      }
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
        case "main":
          return <AdminItemMain />;
        case "artist-project":
          return <AdminItemArtistProject />;
        case "contact":
          return <AdminItemContact />;
        case "about":
          return <AdminItemAbout />;
        case "support":
          return <AdminItemSupport />;
        case "notice":
          return <AdminItemNotice />;
        default:
          return null;
      }
    };
    return [item];
  }, [collection, type]);
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
            {!!collection && <AdminList />}
          </Grid>
          <Grid item xs={5}>
            {item()}
          </Grid>
        </Grid>
      </section>
    </section>
  );
}
