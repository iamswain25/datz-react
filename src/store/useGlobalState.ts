import { createGlobalState } from "react-hooks-global-state";
export type Lang = "en" | "ko";
const lang: Lang = navigator.language.substring(0, 2) === "ko" ? "ko" : "en";
const MOBILE_MENU: boolean = false;
const initialState = { lang, MOBILE_MENU };
export const { useGlobalState } = createGlobalState(initialState);
export function useGlobalLang() {
  return useGlobalState("lang");
}
export function useMobileMenu() {
  return useGlobalState("MOBILE_MENU");
}
