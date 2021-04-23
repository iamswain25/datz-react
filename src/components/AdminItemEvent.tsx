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
import { adminItemHandler } from "../utils/adminItemHandler";
const EVENT_TYPE = ["Artist Talk / Lecture", "Book Fair", "Exhibition"];
const EVENT_LOGO = ["D'Ark Room", "Datz Museum of Art", "Datz Press"];
const EN_FIELDS = ["title_en", "place_en", "body_en"];
const KO_FIELDS = ["title_ko", "place_ko", "body_ko"];
const { submit, duplicate } = adminItemHandler("event");
export default function AdminItemEvent() {
  const [item, setItem] = useAdminItem();
  const formControl = useForm<Event>();
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
        <AdminItemPublic duplicate={duplicate(item, setItem)} />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" alias="url" disabled />
          <AdminRadio field="type" values={EVENT_TYPE} />
          <AdminRadio field="logo" values={EVENT_LOGO} />
          <AdminLine field="date" />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupImages title="IMAGE" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
