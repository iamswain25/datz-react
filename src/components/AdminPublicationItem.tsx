import { css } from "emotion";
import React from "react";
import { useAdminItem } from "../store/useGlobalState";
import AdminLine from "./AdminLine";
import AdminGroup from "./AdminGroup";
import Hr10 from "./Hr10";
import AdminGroupRelated from "./AdminGroupRelated";
import AdminRadio from "./AdminRadio";
import { useForm } from "react-hook-form";
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
const RELATED = [
  "rel_artists",
  "rel_publications",
  "rel_exhibitions",
  "rel_events",
];
const submitHandler = (data: any) => console.log(data);
function AdminPublicationItem() {
  const [item] = useAdminItem();
  const formControl = useForm();
  const { register, handleSubmit, reset } = formControl;
  React.useEffect(() => {
    reset(item);
  }, [item, reset]);

  if (!item) return null;
  return (
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
        <ul>
          <li>
            <input
              type="radio"
              {...register("public")}
              className={css`
                width: 12px;
                height: 12px;
                border: solid 1px #707070;
                margin-right: 9px;
              `}
            />
            Public
          </li>
          <li
            className={css`
              margin-left: 19px;
            `}
          >
            <input
              type="radio"
              {...register("public")}
              className={css`
                width: 12px;
                height: 12px;
                border: solid 1px #707070;
                margin-right: 9px;
              `}
            />
            Private
          </li>
        </ul>
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
        <AdminLine field="id" alias="url" item={item} />
        <AdminRadio
          formControl={formControl}
          field="type"
          item={item}
          values={PUBLICATION_TYPE}
        />
        <AdminLine formControl={formControl} field="edition" item={item} />
        <AdminLine formControl={formControl} field="copies_count" item={item} />
        <AdminLine formControl={formControl} field="order_url_en" item={item} />
        <AdminLine formControl={formControl} field="order_url_ko" item={item} />
        <AdminGroup
          formControl={formControl}
          title="EN"
          item={item}
          fields={EN_FIELDS}
        />
        <AdminGroup
          formControl={formControl}
          title="KO"
          item={item}
          fields={KO_FIELDS}
        />
        <AdminGroupRelated
          formControl={formControl}
          title="RELATED"
          item={item}
          fields={RELATED}
        />
      </section>
    </form>
  );
}

export default AdminPublicationItem;
