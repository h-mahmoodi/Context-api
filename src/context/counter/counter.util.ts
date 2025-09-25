import { STORAGE_KEY } from "./counter.provider";

const FALLBACK_VALUE = 0;

export const getInitialCounter = (): number => {
  if (typeof window === "undefined") return FALLBACK_VALUE;
  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (fromStorage) {
    try {
      const value = parseInt(JSON.parse(fromStorage));
      return value;
    } catch {
      return FALLBACK_VALUE;
    }
  }
  return FALLBACK_VALUE;
};
