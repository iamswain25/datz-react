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
export default function AdminItemNotice() {
  const [item] = useAdminItem();
  const { collection } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const formControl = useForm<Artists>();
  const [en, ko] = React.useMemo(() => {
    const base = [""];
    const en = base.map((str) => str.concat("en"));
    const ko = base.map((str) => str.concat("ko"));
    return [en, ko];
  }, []);
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
          <AdminGroup title="EN" fields={en} />
          <AdminGroup title="KO" fields={ko} />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
