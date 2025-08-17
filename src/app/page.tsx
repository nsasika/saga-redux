"use client";
import Button from "@/components/common/Button";
import Counter from "@/components/features/counter/Counter";
import { incrementByAmount } from "@/components/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ChangeEvent, useState } from "react";

export default function Home() {  
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
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <Counter />
        <Button label="Add Number" onClick={()=>dispatch(incrementByAmount(selectedNumber))}/>
        <input type="number" placeholder="Please select a number" value={selectedNumber} onChange={handleNumberChange}></input>
      </main>
    </div>
  );
}
