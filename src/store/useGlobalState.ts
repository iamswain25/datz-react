import { createGlobalState } from "react-hooks-global-state";
export type Lang = "en" | "ko";
const lang: Lang = navigator.language.substring(0, 2) === "ko" ? "ko" : "en";
const MOBILE_MENU = false;
const NOTICE = undefined;
const initialState = { lang, MOBILE_MENU, NOTICE };
type State = {
  NOTICE?: {
    created_at: any;
    en: string;
    ko: string;
    id: string;
  };
  MOBILE_MENU: boolean;
  lang: Lang;
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
