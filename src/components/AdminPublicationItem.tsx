import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import Hr10 from "./Hr10";
import AdminGroupRelated from "./AdminGroupRelated";
import AdminRadio from "./AdminRadio";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { RelationType } from "../@type/admin";
import { Publication } from "../@type";
import AdminGroupImages from "./AdminGroupImages";
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
const submitHandler = (data: any) => {
  data.public = data.public === "true";
  console.log(data);
};
function AdminPublicationItem() {
  const [item] = useAdminItem();
  const formControl = useForm<Publication>();
  const { handleSubmit, reset, control } = formControl;
  React.useEffect(() => {
    if (item) {
      item.public = item.public ? "true" : "false";
      reset(item);
    }
  }, [item, reset]);

  if (!item) return null;
  return (
    <FormProvider {...formControl}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={css`
          background-color: #ececec;
          font-size: 16px;
          font-weight: 500;
          color: #4b4b4b;
          padding: 37px 15px;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            padding-bottom: 9px;
            border-bottom: 1px solid #707070;
            text-transform: capitalize;
            margin-bottom: 13px;
          `}
        >
          <Controller
            name="public"
            defaultValue="false"
            render={({ field }) => {
              return (
                <ul>
                  <li>
                    <input
                      type="radio"
                      {...field}
                      value="true"
                      className={css`
                        width: 12px;
                        height: 12px;
                        border: solid 1px #707070;
                        margin-right: 9px;
                      `}
                      id="radio-public-true"
                    />
                    <label htmlFor="radio-public-true">Public</label>
                  </li>
                  <li
                    className={css`
                      margin-left: 19px;
                    `}
                  >
                    <input
                      type="radio"
                      {...field}
                      defaultChecked={true}
                      value="false"
                      className={css`
                        width: 12px;
                        height: 12px;
                        border: solid 1px #707070;
                        margin-right: 9px;
                      `}
                      id="radio-public-false"
                    />
                    <label htmlFor="radio-public-false">Private</label>
                  </li>
                </ul>
              );
            }}
            control={control}
          />
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <button
              className={css`
                font-size: 16px;
                font-weight: 500;
                color: #707070;
              `}
            >
              +Duplicate
            </button>
            <Hr10 />
            <button
              className={css`
                font-size: 16px;
                font-weight: 500;
                color: #707070;
              `}
            >
              ✓ Update
            </button>
          </div>
        </div>
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
          <AdminGroupImages title="IMAGE" />
        </section>
      </form>
    </FormProvider>
  );
}

export default AdminPublicationItem;
