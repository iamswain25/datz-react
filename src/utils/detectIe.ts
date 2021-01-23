export function getInternetExplorerVersion() {
  let rv = -1;
  if (window.navigator.appName === "Microsoft Internet Explorer") {
    const ua = window.navigator.userAgent;
    const re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
  } else if (window.navigator.appName === "Netscape") {
    const ua = window.navigator.userAgent;
    const re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
  }
  // console.log(rv);
  return rv;
}
export const isIE = getInternetExplorerVersion() > -1;
