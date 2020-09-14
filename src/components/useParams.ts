import { useParams as useP } from "react-router-dom";
export default function useParams() {
  const params = useP<{ address: string }>();
  return params;
}
