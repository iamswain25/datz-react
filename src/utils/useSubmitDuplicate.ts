import { Collection } from "../@type";
import { auth, firestore, storage } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
import lastAdminWrite from "./lastAdminWrite";

export default function useSubmitDuplicate(col: Collection) {
  const [item, setItem] = useAdminItem();
  const submit = async (data: any) => {
    console.log(data);
    if (!window.confirm("저장하시겠습니까?")) return;
    data.updated_at = new Date();
    data.updated_by = auth.currentUser?.uid;
    // upload files
    const promises = [];
    // return console.log(data.files);
    if (data?.files?.image_cover)
      promises.push(storage.ref(data.image_cover).put(data.files.image_cover));
    if (data?.files?.image) {
      if (data.files.image.length > 1) {
        promises.push(
          ...data.files.image.map(
            ({ file, id }: { file: File; id: string }, index: number) =>
              storage.ref(id).put(file)
          )
        );
      } else {
        promises.push(storage.ref(data.image).put(data.files.image));
      }
    }
    if (data?.files?.images?.length) {
      promises.push(
        ...data.files.images.map(
          ({ file, id }: { file: File; id: string }, index: number) =>
            storage.ref(id).put(file)
        )
      );
    }
    // return console.log(promises, data);
    await Promise.all(promises);
    delete data.files;
    const { id, ...rest } = data;
    console.log(rest);
    await Promise.all([
      firestore.collection(col).doc(id).set(rest, { merge: true }),
      lastAdminWrite(),
    ]);
    window.alert("수정 했습니다.");
  };
  const duplicate = async () => {
    // if (!window.confirm("복제 하시겠습니까?")) return;
    const data = { ...item };
    data.public = false;
    delete data.id;
    data.created_at = new Date();
    data.created_by = auth.currentUser?.uid;
    data.order = Number(data.order) + 100;
    const id = window.prompt("새로운 url을 입력해주세요.");
    if (id === null) return;
    if (!id)
      return window.alert("url이 입력되지 않았습니다. 다시 시도해주세요.");
    const docRef = await firestore.collection(col).doc(id).get();
    if (docRef.exists)
      return window.alert("이미 해당 url이 존재합니다. 다른 url로 시도하세요.");
    await docRef.ref.set(data);
    setItem({ ...data, id });
  };

  return { duplicate, submit };
}
