import React from "react";
import { storage } from "../config/firebase";
export default function useStorage(path?: string) {
  const [image, setImage] = React.useState<undefined | string>(undefined);
  React.useEffect(() => {
    if (!path) return;
    storage
      .ref(path)
      .getDownloadURL()
      .then((url) => setImage(url))
      .catch(console.warn);
  }, [path]);
  return image;
}
