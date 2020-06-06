import { useMediaQuery } from "react-responsive";
export default function useDesktop() {
  const isDeskTop = useMediaQuery({ minWidth: 1000 });
  return isDeskTop;
}
