import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
export default function useDesktop(scrollTop = false) {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  useEffect(() => {
    if (scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [scrollTop]);
  return isDesktop;
}
