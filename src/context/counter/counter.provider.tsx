import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CounterContext } from "./counter.context";
import { getInitialCounter } from "./counter.util";

export const STORAGE_KEY = "counter_state";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(getInitialCounter());
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(counter));
    }
  }, [counter]);

  const increment = useCallback((step: number) => {
    setCounter((value) => value + step);
  }, []);

  const decrement = useCallback((step: number) => {
    setCounter((value) => value - step);
  }, []);

  const value = useMemo(() => {
    return {
      counter,
      increment,
      decrement,
    };
  }, [counter, increment, decrement]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
