import React from "react";

import { firestore, storage } from "../config/firebase";
import ImageUploader from "react-images-upload";
let imageFile: File;
export default (props: { data: any; setNew: Function; collection: string }) => {
  if (!props.data) {
    return null;
  }
  const [data, setData] = React.useState(props.data);
  const { type, title, author, color, isShowing, image } = data;

  React.useEffect(() => {
    setData(props.data);
  }, [props.data]);

  function imgChangeHandler(pictures: File[], pictureDataURLs: string[]) {
    setData({ ...data, image: pictureDataURLs[0] });
    imageFile = pictures[0];
  }

  async function saveHandler() {
    delete data.id;
    data.image = "";
    const ref = await firestore.collection(props.collection).add(data);
    if (imageFile) {
      const imgUrl = await storage
        .ref()
        .child(ref.id)
        .put(imageFile)
        .then((snapshot) => snapshot.ref.getDownloadURL());
      ref.update({ image: imgUrl });
    }
    props.setNew(false);
  }

  const divStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "stretch",
    padding: 37,
    background: `url(${image}) no-repeat center`,
    backgroundSize: "contain",
    backgroundOrigin: "content-box",
  };

  return (
    <div style={divStyle}>
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
          backgroundColor: "white",
        }}
      >
        <ImageUploader
          buttonText="Choose images"
          onChange={imgChangeHandler}
          singleImage={true}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
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

        <button type="button" onClick={saveHandler}>
          save
        </button>
      </div>
    </div>
  );
};
