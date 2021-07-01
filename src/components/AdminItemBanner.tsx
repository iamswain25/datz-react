import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import { useForm, FormProvider } from "react-hook-form";
import { Banner, Collection } from "../@type";
import LoadingCenter from "./LoadingCenter";
import AdminItemPublic from "./AdminItemPublic";
import useSubmitDuplicate from "../utils/useSubmitDuplicate";
import AdminRadio from "./AdminRadio";
import AdminGroupImage from "./AdminGroupImage";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
import { formOptionRequired } from "../utils/required";
import AdminHidden from "./AdminHidden";
const LOGO = ["D'Ark Room", "Datz Museum of Art", "Datz Press"];
const EN_FIELDS = ["title_en", "text_en"];
const KO_FIELDS = ["title_ko", "text_ko"];
const COLORS = [
  { value: "#5d5d5d", label: "Dark Grey(default)" },
  { value: "#fff", label: "White" },
];
export default function AdminItemMain() {
  const { type } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(type as Collection);
  const [item] = useAdminItem();
  const formControl = useForm<Banner>();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = formControl;
  React.useEffect(() => {
    reset({ ...item });
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
          <AdminHidden field="collection" />
          <AdminLine field="id" disabled />
          <AdminLine field="url" alias="link" />
          <AdminRadio field="color" values={COLORS} {...formOptionRequired} />
          <AdminLine field="type" {...formOptionRequired} />
          <AdminRadio field="logo" values={LOGO} {...formOptionRequired} />
          <AdminGroup title="EN" fields={EN_FIELDS} />
          <AdminGroup title="KO" fields={KO_FIELDS} />
          <AdminGroupImage title="IMAGE" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
