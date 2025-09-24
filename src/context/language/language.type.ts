import type { Dispatch, SetStateAction } from "react";

export enum Language {
  FA = "fa",
  EN = "en",
}

export type LanguageContextValue = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  toggleLanguage: () => void;
};
