import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState<number | string>(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (value: string) => {
    if (isNaN(parseInt(value))) {
      setIsDisabled(true);
      setIncrementValue(value.toString());
    } else {
      setIsDisabled(false);
      setIncrementValue(parseInt(value));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <div style={{ display: "inline-flex" }}>
        <button
          aria-label="increment yo value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <span style={{ padding: "10px", fontWeight: "bold" }}>{count}</span>
        <button
          aria-label="decrement yo value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
      </div>
      <input
        type="number"
        value={incrementValue}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button
        aria-label="increment by input value"
        onClick={() => {
          dispatch(incrementByAmount(incrementValue as number));
        }}
        disabled={isDisabled}
      >
        increment by {incrementValue}
      </button>
    </div>
  );
}
