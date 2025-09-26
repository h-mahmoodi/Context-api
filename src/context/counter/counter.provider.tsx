import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { CounterContext } from "./counter.context";
import { getInitialCounter } from "./counter.util";

export const STORAGE_KEY = "counter_state";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(getInitialCounter());
  const [step, setStep] = useState(1);
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

  const reset = useCallback(() => {
    setCounter(0);
  }, []);

  const value = useMemo(() => {
    return {
      counter,
      increment,
      decrement,
      reset,
      step,
      setStep,
    };
  }, [counter, increment, decrement, reset, step]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};
