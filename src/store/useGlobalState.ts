import { createGlobalState } from "react-hooks-global-state";
export type Lang = "en" | "ko";
const lang: Lang = navigator.language.substring(0, 2) === "ko" ? "ko" : "en";
const MOBILE_MENU = false;
const NOTICE = undefined;
const adminItem = undefined;
const initialState = { lang, MOBILE_MENU, NOTICE, adminItem };
type State = {
  NOTICE?: {
    created_at: any;
    en: string;
    ko: string;
    id: string;
    ref?: firebase.default.firestore.DocumentReference;
    public: boolean;
  };
  MOBILE_MENU: boolean;
  lang: Lang;
  adminItem?: any;
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
