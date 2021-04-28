import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import AdminRadio from "./AdminRadio";
import { useForm, FormProvider } from "react-hook-form";
import { Event } from "../@type";
import AdminGroupImages from "./AdminGroupImages";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import useSubmitDuplicate from "../utils/useSubmitDuplicate";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
import { formOptionRequired } from "../utils/required";
const EVENT_TYPE = ["Artist Talk / Lecture", "Book Fair", "Exhibition"];
const EVENT_LOGO = ["D'Ark Room", "Datz Museum of Art", "Datz Press"];
const EN_FIELDS = ["title_en", "place_en", "body_en"];
const KO_FIELDS = ["title_ko", "place_ko", "body_ko"];
export default function AdminItemEvent() {
  const { collection } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const [item] = useAdminItem();
  const formControl = useForm<Event>({ defaultValues: {} });
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
            values={EVENT_TYPE}
            {...formOptionRequired}
          />
          <AdminRadio
            field="logo"
            values={EVENT_LOGO}
            {...formOptionRequired}
          />
          <AdminLine field="date" {...formOptionRequired} />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupImages title="IMAGE" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
