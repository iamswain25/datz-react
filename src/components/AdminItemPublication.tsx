import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import AdminGroupRelated from "./AdminGroupRelated";
import AdminRadio from "./AdminRadio";
import { useForm, FormProvider } from "react-hook-form";
import { RelationType } from "../@type/admin";
import { Publication } from "../@type";
import AdminGroupImages from "./AdminGroupImages";
import AdminGroupVideo from "./AdminGroupVideo";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import { adminItemHandler } from "../utils/adminItemHandler";
const PUBLICATION_TYPE = ["Book", "Magazine", "Artist' Book"];
const EN_FIELDS = [
  "title_en",
  "artist_en",
  "preview_quote_en",
  "preview_body_en",
  "quotes_en",
  "body_en",
  "notes_en",
];
const KO_FIELDS = [
  "title_ko",
  "artist_ko",
  "preview_quote_ko",
  "preview_body_ko",
  "quotes_ko",
  "body_ko",
  "notes_ko",
];
const RELATED: RelationType[] = [
  "rel_artists",
  "rel_publications",
  "rel_exhibitions",
  "rel_events",
];
const { submit, duplicate } = adminItemHandler("publication");
export default function AdminItemPublication() {
  const [item, setItem] = useAdminItem();
  const formControl = useForm<Publication>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formControl;
  React.useEffect(() => {
    reset(item);
  }, [item, reset]);

  if (!item) return null;
  return (
    <FormProvider {...formControl}>
      <form
        onSubmit={handleSubmit(submit)}
        className={css`
          background-color: #ececec;
          font-size: 16px;
          font-weight: 500;
          color: #4b4b4b;
          padding: 37px 15px;
        `}
      >
        <AdminItemPublic duplicate={duplicate(item, setItem)} />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" alias="url" disabled />
          <AdminRadio field="type" values={PUBLICATION_TYPE} />
          <AdminLine field="edition" />
          <AdminLine field="copies_count" />
          <AdminLine field="order_url_en" />
          <AdminLine field="order_url_ko" />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupRelated title="RELATED" fields={RELATED} />
          <AdminGroupImages title="IMAGE" hasCover />
          <AdminGroupVideo title="Video" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
