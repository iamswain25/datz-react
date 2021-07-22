import { Collection } from "../@type";
import { auth, firestore, storage } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";
import lastAdminWrite from "./lastAdminWrite";

export default function useSubmitDuplicate(col: Collection) {
  const [item, setItem] = useAdminItem();
  const submit = async (data: any) => {
    console.log(data);
    if (!window.confirm("Save changes?")) return;
    delete data.created_at;
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
    ]).catch(window.alert);
    setItem(data);
  };
  const duplicate = async () => {
    // if (!window.confirm("복제 하시겠습니까?")) return;
    const data = { ...item };
    data.public = false;
    delete data.id;
    data.created_at = new Date();
    data.created_by = auth.currentUser?.uid;
    data.order = Number(data.order) + 100;
    const id = window.prompt("Create a new id/url.");
    if (id === null) return;
    if (!id)
      return window.alert("You must create a new id/url for the next step.");
    const docRef = await firestore.collection(col).doc(id).get();
    if (docRef.exists) return window.alert("Id/url already exists.");
    await docRef.ref.set(data);
    setItem({ ...data, id });
  };

  return { duplicate, submit };
}
