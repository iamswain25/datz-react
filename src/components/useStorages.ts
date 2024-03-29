import React from "react";
import { storage } from "../config/firebase";
export default function useStorages(paths: string[]) {
  const [images, setImages] = React.useState<undefined | string[]>(undefined);
  React.useEffect(() => {
    let isCancelled = false;
    if (!paths || !paths.length) return;
    Promise.all(
      paths.map(async (path) =>
        storage.ref(path).getDownloadURL().catch(console.error)
      )
    )
      .then((urls) => !isCancelled && setImages(urls))
      .catch(console.error);
    return () => {
      isCancelled = true;
    };
  }, [paths]);
  return images;
}
