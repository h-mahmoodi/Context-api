import { useCounter } from "../../context/counter/counter.hook";

export const CounterControl = () => {
  const { increment, decrement, reset, step } = useCounter();

  return (
    <div>
      <div>
        <button onClick={() => increment(step)}>increment</button>
        <button onClick={() => decrement(step)}>decrement</button>
      </div>
      <div>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
};
