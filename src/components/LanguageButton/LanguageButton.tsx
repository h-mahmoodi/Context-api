import {
  useGetLanguage,
  useToggleLanguage,
} from "../../context/language/language.hook";
import { Language } from "../../context/language/language.type";

const buttonText = {
  [Language.FA]: "تغییر زبان",
  [Language.EN]: "Change Language",
};

export const LanguageButton = () => {
  const langueage = useGetLanguage();
  const toggleLanguage = useToggleLanguage();
  return <button onClick={toggleLanguage}>{buttonText[langueage]}</button>;
};
