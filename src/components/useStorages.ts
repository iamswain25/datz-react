import React from "react";
import { storage } from "../config/firebase";
export default function useStorages(paths: string[]) {
  const [images, setImages] = React.useState<undefined | string[]>(undefined);
  React.useEffect(() => {
    if (!paths || !paths.length) return;
    Promise.all(
      paths.map(async (path) => storage.ref(path).getDownloadURL())
    ).then((urls) => setImages(urls)).catch(console.error);
  }, [paths]);
  return images;
}
