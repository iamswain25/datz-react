import { useParams } from "react-router-dom";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";

export default function useCreateNew() {
  const { type, collection } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  return async function createNew() {
    const id = window.prompt("ID 혹은 URL을 입력하세요!");
    if (id === null) return;
    if (id === "") {
      return window.alert("id를 입력하셔야 합니다. 다시 시도하세요.");
    }
    const res = await firestore
      .collection(
        ["banner", "publication_category"].includes(type) ? type : collection
      )
      .doc(id)
      .get();
    if (res.exists) {
      return window.alert("id가 이미 존재합니다. 다른 id로 시도하세요");
    }
    setAdminItem({ id, public: false, updated_by: null, order: 0 });
  };
}
