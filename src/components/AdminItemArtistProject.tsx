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
import AdminGroupImage from "./AdminGroupImage";
import { Param } from "../@type/admin";
import { useParams } from "react-router-dom";
export default function AdminItemArtistProject() {
  const { type, collection } = useParams<Param>();
  const { submit, duplicate } = useSubmitDuplicate(collection);
  const [item] = useAdminItem();
  const formControl = useForm<Artists>({ defaultValues: {} });
  const [en, ko] = React.useMemo(() => {
    const base = ["text"];
    switch (type) {
      case "exhibition":
        break;
      case "projects": {
        base.push("artist");
        break;
      }
      case "facilities": {
        base.unshift("title");
        base.push("body");
        break;
      }
    }
    const en = base.map((str) => str.concat("_en"));
    const ko = base.map((str) => str.concat("_ko"));
    return [en, ko];
  }, [type]);
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
          noPublic={["book", "residency", "exhibition"].includes(type)}
          // duplicate={duplicate}
          duplicate={
            ["book", "residency", "exhibition"].includes(item.type)
              ? undefined
              : duplicate
          }
        />
        <section
          className={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          <AdminLine field="id" disabled />
          {["projects", "facilities"].includes(type) ? (
            <>
              <AdminLine field="url" />
            </>
          ) : type === "residency" ? (
            <>
              <AdminLine field="url" />
              <AdminLine field="url2" />
            </>
          ) : null}
          <AdminGroup title="EN" fields={en} />
          <AdminGroup title="KO" fields={ko} />
          <AdminGroupImage
            title="IMAGE"
            multiple={["book", "exhibition"].includes(type)}
          />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}
