import { useContext } from "react";
import { CounterContext } from "./counter.context";

export const useCounter = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) {
    throw new Error("consumer is not in counter provider");
  }
  return ctx;
};
