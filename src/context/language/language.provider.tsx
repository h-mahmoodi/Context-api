import { useCallback, useState, type FC, type PropsWithChildren } from "react";
import { Language } from "./language.type";
import { LanguageContext } from "./language.context";

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const toggleLanguage = useCallback(() => {
    return setLanguage((prev) =>
      prev === Language.FA ? Language.EN : Language.FA
    );
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
