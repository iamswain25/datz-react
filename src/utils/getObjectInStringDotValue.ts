export default function getObjectInStringDotValue(
  obj: any,
  str: string
): object {
  return str?.split(".")?.reduce((o, i) => o?.[i], obj);
}
