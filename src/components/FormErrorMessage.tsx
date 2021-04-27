import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";
import { css } from "emotion";

export default function FormErrorMessage(props: {
  errors: FieldErrors;
  name: string;
}) {
  const { errors, name } = props;
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      as="p"
      className={css`
        color: red;
      `}
    />
  );
}
