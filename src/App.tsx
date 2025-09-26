import "./App.css";
import { DisplayCounter } from "./component/DisplayCounter/DisplayCounter";
import { CounterControl } from "./component/CounterControl/CounterControl";
import { CounterStep } from "./component/CounterStep/CounterStep";

function App() {
  return (
    <div>
      <DisplayCounter />
      <CounterStep />
      <CounterControl />
    </div>
  );
}

export default App;
