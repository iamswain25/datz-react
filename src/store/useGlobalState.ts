import { createGlobalState } from "react-hooks-global-state";
export type Lang = "en" | "ko";
const lang: Lang = navigator.language.substring(0, 2) === "ko" ? "ko" : "en";
const initialState = { lang };
export const { useGlobalState } = createGlobalState(initialState);
export const LANG = "lang";
