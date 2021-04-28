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
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
import AdminGroupList from "./AdminGroupList";
import { formOptionRequired } from "../utils/required";
export default function AdminItemContact() {
  const [item] = useAdminItem();
  const { collection, type } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const formControl = useForm<Artists>({ defaultValues: {} });
  const [en, ko] = React.useMemo(() => {
    const base = ["title"];
    if (item?.type2 === "phone") {
      base.push("text");
    }
    const en = base.map((str) => str.concat("_en"));
    const ko = base.map((str) => str.concat("_ko"));
    return [en, ko];
  }, [item]);
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
        <AdminItemPublic
          noPublic={type === "etc"}
          duplicate={type !== "etc" ? duplicate : undefined}
        />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" disabled />
          {["catalog"].includes(item?.type2) && (
            <AdminLine field="url" {...formOptionRequired} />
          )}
          <AdminGroup title="EN" fields={en} />
          <AdminGroup title="KO" fields={ko} />
          {!["phone", "enquiry", "catalog"].includes(item?.type2) && (
            <AdminGroupList title="LIST" />
          )}
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
