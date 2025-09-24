import { useCallback, useEffect, useMemo, useState, type FC, type PropsWithChildren } from "react";
import { Language } from "./language.type";
import { LanguageContext } from "./language.context";

const STORAGE_KEY = "language";

const initialLanguageState = () => {
  if (typeof window === "undefined") return Language.EN;
  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (fromStorage === Language.FA || fromStorage === Language.EN) return fromStorage;
  const fromNavigator = navigator.language;
  if (fromNavigator) return fromNavigator.toLowerCase().startsWith(Language.FA) ? Language.FA : Language.EN;
  return Language.EN;
};

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(initialLanguageState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, language);
      } catch {
        console.log(`Save Language Error`);
      }
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    return setLanguage((prev) => (prev === Language.FA ? Language.EN : Language.FA));
  }, []);

  const value = useMemo(() => {
    return { language, setLanguage, toggleLanguage };
  }, [language, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
