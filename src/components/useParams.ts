import { useParams as useP } from "react-router-dom";
export default function useParams() {
  const params = useP<{ id: string; index: string; filter: string }>();
  return params;
}
