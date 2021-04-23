import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import { useForm, FormProvider } from "react-hook-form";
import { Artists } from "../@type";
import AdminGroupImages from "./AdminGroupImages";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import { adminItemHandler } from "../utils/adminItemHandler";
const EN_FIELDS = ["title_en", "place_en", "body_en"];
const KO_FIELDS = ["title_ko", "place_ko", "body_ko"];
const { submit, duplicate } = adminItemHandler("news");
export default function AdminItemNews() {
  const [item, setItem] = useAdminItem();
  const formControl = useForm<Artists>();
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
          <AdminLine field="type" />
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
