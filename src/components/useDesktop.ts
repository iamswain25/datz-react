import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
export default function useDesktop() {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return isDesktop;
}
