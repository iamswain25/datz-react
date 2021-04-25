export default function getObjectInStringDotValue(obj: any, str: string) {
  return str?.split(".")?.reduce((o, i) => o?.[i], obj);
}
