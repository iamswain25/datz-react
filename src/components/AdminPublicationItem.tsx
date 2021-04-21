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
import AdminGroupVideo from "./AdminGroupVideo";
import { auth, firestore, storage } from "../config/firebase";
import LoadingCenter from "./LoadingCenter";
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
const submitHandler = async (data: any) => {
  if (!window.confirm("저장하시겠습니까?")) return;
  data.public = data.public === "true";
  data.updated_at = new Date();
  data.updated_by = auth.currentUser?.uid;
  // upload files
  const promises = [];
  // return console.log(data.files);
  if (data.files.image_cover)
    promises.push(storage.ref(data.image_cover).put(data.files.image_cover));
  if (data.files.images?.length) {
    promises.push(
      ...data.files.images.map(
        ({ file, id }: { file: File; id: string }, index: number) =>
          storage.ref(id).put(file)
      )
    );
  }
  // return console.log(promises);
  await Promise.all(promises);
  delete data.files;
  const { id, ...rest } = data;
  await firestore.collection("publication").doc(id).set(rest, { merge: true });
  window.alert("수정 했습니다.");
};
const duplicateHandler = (
  data: any,
  setItem: (item: any) => void
) => async () => {
  if (!window.confirm("복제 하시겠습니까?")) return;
  data.public = false;
  delete data.id;
  data.created_at = new Date();
  data.created_by = auth.currentUser?.uid;
  data.order = Number(data.order) + 100;
  const id = window.prompt("새로운 url을 입력해주세요.");
  if (id === null) return;
  if (!id) return window.alert("url이 입력되지 않았습니다. 다시 시도해주세요.");
  const docRef = await firestore.collection("publication").doc(id).get();
  if (docRef.exists)
    return window.alert("이미 해당 url이 존재합니다. 다른 url로 시도하세요.");
  await docRef.ref.set(data);
  setItem({ ...data, id });
};
function AdminPublicationItem() {
  const [item, setItem] = useAdminItem();
  const formControl = useForm<Publication>();
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = formControl;
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
              type="button"
              onClick={duplicateHandler(item, setItem)}
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
              type="submit"
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
          <AdminGroupVideo title="Video" />
        </section>
      </form>
      {isSubmitting && <LoadingCenter />}
    </FormProvider>
  );
}

export default AdminPublicationItem;
