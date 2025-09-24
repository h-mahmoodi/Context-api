import { useContext } from "react";
import { LanguageContext } from "./language.context";

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("Children is not in Language provider");
  }
  return ctx;
};

export const useGetLanguage = () => {
  const { language } = useLanguage();
  return language;
};

export const useSetLanguage = () => {
  const { setLanguage } = useLanguage();
  return setLanguage;
};

export const useToggleLanguage = () => {
  const { toggleLanguage } = useLanguage();
  return toggleLanguage;
};
