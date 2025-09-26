import { useCounter } from "../../context/counter/counter.hook";

export const DisplayCounter = () => {
  const { counter } = useCounter();
  return <div>{counter}</div>;
};
