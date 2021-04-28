import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import AdminGroupRelated from "./AdminGroupRelated";
import AdminRadio from "./AdminRadio";
import { useForm, FormProvider } from "react-hook-form";
import { Param, RelationType } from "../@type/admin";
import { Exhibition } from "../@type";
import AdminGroupImages from "./AdminGroupImages";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import useSubmitDuplicate from "../utils/useSubmitDuplicate";
import { useParams } from "react-router-dom";
import { formOptionRequired } from "../utils/required";
const EXHIBITION_TYPE = [
  "D'Ark Room",
  "Datz Museum of Art",
  "Datz Press Gallery",
];
const EN_FIELDS = ["title_en", "preview_body_en", "body_en", "notes_en"];
const KO_FIELDS = ["title_ko", "preview_body_ko", "body_ko", "notes_ko"];
const RELATED: RelationType[] = [
  "rel_artists",
  "rel_publications",
  "rel_events",
];
export default function AdminItemExhibition() {
  const { collection } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const [item] = useAdminItem();
  const formControl = useForm<Exhibition>({ defaultValues: {} });
  const {
    reset,
    handleSubmit,
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
        <AdminItemPublic duplicate={duplicate} />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" alias="url" disabled />
          <AdminRadio
            field="type"
            values={EXHIBITION_TYPE}
            {...formOptionRequired}
          />
          <AdminLine field="visit_url" />
          <AdminLine field="start_date" {...formOptionRequired} />
          <AdminLine field="end_date" {...formOptionRequired} />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupRelated title="RELATED" fields={RELATED} />
          <AdminGroupImages title="IMAGE" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
