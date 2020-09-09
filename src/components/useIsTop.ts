import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function useIsTop() {
  const [isTop, setTop] = React.useState(true);
  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y > -1;
      if (isShow !== isTop) setTop(isShow);
    },
    [isTop]
  );
  return isTop;
}
