import { createContext } from "react";
import type { LanguageContextValue } from "./language.type";

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
