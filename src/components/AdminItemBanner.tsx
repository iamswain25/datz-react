import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import { useForm, FormProvider } from "react-hook-form";
import { Artists } from "../@type";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import useSubmitDuplicate from "../utils/useSubmitDuplicate";
import AdminRadio from "./AdminRadio";
import AdminGroupImage from "./AdminGroupImage";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
const LOGO = ["D'Ark Room", "Datz Museum of Art", "Datz Press"];
const EN_FIELDS = ["title_en", "text_en"];
const KO_FIELDS = ["title_ko", "text_ko"];
export default function AdminItemMain() {
  const { collection } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const [item] = useAdminItem();
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
        <AdminItemPublic duplicate={duplicate} />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" disabled />
          <AdminLine field="url" alias="link" />
          <AdminLine field="type" />
          <AdminRadio field="logo" values={LOGO} />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupImage title="IMAGE" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}