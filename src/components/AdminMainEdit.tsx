import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Main } from "../@type/main";
import { firestore, storage } from "../firebase";
export default (props: { data: Main; collection: string }) => {
  if (!props.data) {
    return null;
  }
  const [data, setData] = React.useState(props.data);
  const { type, title, author, color, isShowing, id } = data;

  React.useEffect(() => {
    setData(props.data);
  }, [props.data]);

  async function updateHandler() {
    await firestore
      .collection(props.collection)
      .doc(String(id))
      .update({ type, title, author, color, isShowing });
  }
  async function deleteHandler() {
    if (window.confirm("delete this?")) {
      const { id } = props.data;
      const deleteData = firestore
        .collection(props.collection)
        .doc(String(id))
        .delete();
      const deleteImg = storage.ref().child(String(id)).delete();
      return await Promise.all([deleteData, deleteImg]);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute" as "absolute",
        top: 0,
        left: 0,
        justifyContent: "stretch",
        padding: 37,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <input
          type="text"
          value={type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
          style={{ textAlign: "center", color, width: "inherit" }}
        />
        <hr
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: "calc(100% - 40px)",
          }}
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          style={{ textAlign: "center", color, width: "inherit" }}
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
          style={{ textAlign: "center", color, width: "inherit" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={color}
          onChange={(e) => setData({ ...data, color: e.target.value })}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            width: "inherit",
          }}
        />
        <label htmlFor="isShowing">show</label>
        <input
          id="isShowing"
          type="checkbox"
          checked={isShowing}
          onChange={(e) => setData({ ...data, isShowing: e.target.checked })}
          style={{
            backgroundColor: "white",
            textAlign: "center",
          }}
        />

        <button type="button" onClick={updateHandler}>
          update
        </button>
        <button type="button" onClick={deleteHandler}>
          delete
        </button>
      </div>
    </div>
  );
};
