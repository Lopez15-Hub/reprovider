import reproviderLogo from "./assets/reprovider_logo.png";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./core/hooks/hooks";
import {
  decrement,
  increment,
} from "./core/store/counter-store/counter.buildux";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <img src={reproviderLogo} className="logo" alt="Reprovider logo" />
        <a href="https://redux-toolkit.js.org/">
          <img
            src="https://redux-toolkit.js.org/img/redux.svg"
            className="logo Redux Toolkit"
            alt="Redux toolkit logo"
          />
        </a>
      </div>
      <h1>Reprovider + Redux Example</h1>
      <div className="card">
        <button onClick={() => dispatch(increment(1))}>+1</button>
        <h1>Counter value is: {count}</h1>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
