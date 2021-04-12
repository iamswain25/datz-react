const convert2ItemType = (fields: any) =>
  Array.isArray(fields)
    ? fields?.map((str: string) => ({ name: str, id: str }))
    : typeof fields === "string"
    ? [{ name: fields, id: fields }]
    : [];
export default convert2ItemType;
