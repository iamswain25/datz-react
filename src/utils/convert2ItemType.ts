import path from "path";

export const convert2ItemType = (fields: any) =>
  Array.isArray(fields)
    ? fields?.map((str: string) => ({ name: path.basename(str), id: str }))
    : typeof fields === "string"
    ? [{ name: path.basename(fields), id: fields }]
    : [];

export function uniqBy(a: any[], key: any) {
  var seen: any = {};
  return a.filter((item: any) => {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}
