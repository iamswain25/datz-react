import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Main } from "../@type/main";
import coverImg from "../images/cover.jpg";
import { firestore } from "../firebase";
export default (props: React.PropsWithoutRef<{ data: Main }>) => {
  const [type, setType] = React.useState(props.data.type);
  const [title, setTitle] = React.useState(props.data.title);
  const [author, setAuthor] = React.useState(props.data.author);
  const [color, setColor] = React.useState(props.data.color);
  const [isShowing, setShowing] = React.useState(props.data.isShowing);
  const [image, setImage] = React.useState(props.data.image);
  function saveHandler() {
    firestore
      .collection("main")
      .add({ type, title, author, color, isShowing, image });
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 37,
        background: `url(${image}) no-repeat center`,
        backgroundSize: "contain"
      }}
    >
      <input
        type="text"
        value={type}
        onChange={e => setType(e.target.value)}
        style={{ textAlign: "center", color }}
      />
      <hr style={{ borderWidth: 1, borderColor: "black", width: 400 }} />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ textAlign: "center", color }}
      />
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        style={{ textAlign: "center", color }}
      />
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
        style={{ backgroundColor: "white", textAlign: "center" }}
      />
      <input
        id="isShowing"
        type="checkbox"
        checked={isShowing}
        onChange={e => setShowing(e.target.checked)}
        style={{ backgroundColor: "white", textAlign: "center" }}
      />
      <button type="button" onClick={saveHandler}>
        save
      </button>
    </div>
  );
};
