import { useMediaQuery } from "react-responsive";
export default function useDesktop() {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return isDesktop;
}
