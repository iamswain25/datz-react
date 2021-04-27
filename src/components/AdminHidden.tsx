import React from "react";
import { useFormContext } from "react-hook-form";
export default function AdminHidden(props: { field: string }) {
  const { field } = props;
  const { register } = useFormContext();

  return <input type="hidden" readOnly {...register(field)} />;
}
