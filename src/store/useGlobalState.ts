import { createGlobalState } from "react-hooks-global-state";
import firebase from "firebase/app";
import { firestore } from "../config/firebase";
export type Lang = "en" | "ko";
export interface Notice {
  created_at: any;
  en: string;
  ko: string;
  link_en: string;
  link_ko: string;
  id: string;
  ref?: firebase.firestore.DocumentReference;
  public: boolean;
}
const lang: Lang = navigator.language.substring(0, 2) === "ko" ? "ko" : "en";
const MOBILE_MENU = false;
const NOTICE = undefined;
const adminItem = undefined;
const adminOrder = false;
const featureFlag = { mainRandomStartIndex: false };
const initialState = {
  lang,
  MOBILE_MENU,
  NOTICE,
  adminItem,
  adminOrder,
  featureFlag,
};
type State = {
  NOTICE?: Notice;
  MOBILE_MENU: boolean;
  lang: Lang;
  adminItem?: any;
  adminOrder: boolean;
  featureFlag: {
    mainRandomStartIndex: boolean;
  };
};

export const { useGlobalState } = createGlobalState<State>(initialState);

export function useGlobalLang() {
  return useGlobalState("lang");
}
export function useMobileMenu() {
  return useGlobalState("MOBILE_MENU");
}
export function useNotice() {
  return useGlobalState("NOTICE");
}
export function useAdminItem() {
  return useGlobalState("adminItem");
}
export function useAdminOrder() {
  return useGlobalState("adminOrder");
}
export function useFeatureFlag() {
  return useGlobalState("featureFlag");
}
firestore
  .collection("system")
  .doc("feature-flag")
  .get()
  .then((snapshot) => {
    const data = snapshot.data() as any;
    Object.assign(featureFlag, data);
  });
