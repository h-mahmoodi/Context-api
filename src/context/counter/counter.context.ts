import { createContext } from "react";

type CounterContextValue = {
  counter: number;
  step: number;
  setStep: (step: number) => void;
  increment: (step: number) => void;
  decrement: (step: number) => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextValue | undefined>(undefined);
