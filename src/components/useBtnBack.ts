import { useHistory } from "react-router-dom";

export default function useBtnBack() {
  const history = useHistory();
  function goBack() {
    if (history.length < 3) {
      return history.replace("/");
    }
    history.goBack();
  }
  return goBack;
}
