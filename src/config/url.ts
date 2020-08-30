export const imageUrl =
  "https://raw.githubusercontent.com/iamswain25/datz-image/master/";
export function makeUrl(url: string) {
  if (url.indexOf("static/media") > -1) {
    return url;
  }
  return imageUrl + url;
}
