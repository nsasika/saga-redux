import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrement, increment } from "./counterSlice";
import { CounterWrapper } from "./styles";
import { ReactNode } from "react";

const Counter = (): ReactNode => {
     const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    const handleIncrement = () => {
        dispatch(increment());
      };
    
      const handleDecrement = () => {
        dispatch(decrement());
      };
    return (
      <CounterWrapper>
        <span style={{ backgroundColor: "greenyellow" }}> Count ${count}</span>
        <button
          style={{ backgroundColor: "yellow", padding: "2px", margin: "5px" }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          style={{ backgroundColor: "yellow", padding: "2px", margin: "5px" }}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </CounterWrapper>
    );
  };

  export default Counter;