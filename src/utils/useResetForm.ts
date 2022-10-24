import React from "react";
import { UseFormReset } from "react-hook-form";
import { useAdminItem } from "../store/useGlobalState";

export default function useResetForm<T extends object>(reset: UseFormReset<T>) {
  const [item] = useAdminItem();
  React.useEffect(() => {
    reset(item);
    // eslint-disable-next-line
  }, [item]);
  return item;
}
