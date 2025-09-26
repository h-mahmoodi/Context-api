import { type ChangeEvent } from "react";
import { useCounter } from "../../context/counter/counter.hook";

export const CounterStep = () => {
  const { step, setStep } = useCounter();

  const handleStep = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    return parseInt(value) ? setStep(parseInt(value)) : setStep(1);
  };
  return (
    <div>
      <input type="number" onChange={handleStep} value={step} />
    </div>
  );
};
