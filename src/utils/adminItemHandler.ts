import { Collection } from "../@type";
import { auth, firestore, storage } from "../config/firebase";

export function adminItemHandler(col: Collection) {
  const submit = async (data: any) => {
    if (!window.confirm("저장하시겠습니까?")) return;
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
    await firestore.collection(col).doc(id).set(rest, { merge: true });
    window.alert("수정 했습니다.");
  };
  const duplicate = (data: any, setItem: (item: any) => void) => async () => {
    if (!window.confirm("복제 하시겠습니까?")) return;
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
