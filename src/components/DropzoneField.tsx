import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
type OnChange = (e: any) => any;
export default function DropzoneField(
  props: DropzoneOptions & { name: string }
) {
  const { name, multiple, ...rest } = props;
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone
          multiple={multiple}
          onChange={(e) =>
            onChange(multiple ? e.target.files : e.target.files[0])
          }
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
}

const Dropzone = ({
  multiple,
  onChange,
  ...rest
}: DropzoneOptions & { onChange: OnChange }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    ...rest,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ onChange })} />
    </div>
  );
};
