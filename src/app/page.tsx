"use client";
import { ReactNode, useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  const [count, setCount] = useState(() => 0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
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

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <Counter />
      </main>
    </div>
  );
}
