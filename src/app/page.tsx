"use client";
import { decrement, increment,incrementByAmount } from "@/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, ReactNode, useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  display:flex
  aligh-items-column
`;

export default function Home() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [selectedNumber,setSelectedNumber] = useState<number>(0);

  const handleNumberChange =(event: ChangeEvent<HTMLInputElement>)=> {
    const value = event.target.value;
    if(value === ''){
      setSelectedNumber(0);
    }else{
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setSelectedNumber(numericValue);
      }
    }
  }
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const Counter = (): ReactNode => {
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

  console.log("selectedNumber ",selectedNumber);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <Counter />
        <button onClick={()=>dispatch(incrementByAmount(selectedNumber))}>Add Number </button>
        <input type="number" placeholder="Please select a number" value={selectedNumber} onChange={handleNumberChange}></input>
      </main>
    </div>
  );
}
