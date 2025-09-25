import { createContext } from "react";

type CounterContextValue = {
  counter: number;
  increment: (step: number) => void;
  decrement: (step: number) => void;
};

export const CounterContext = createContext<CounterContextValue | undefined>(
  undefined
);
