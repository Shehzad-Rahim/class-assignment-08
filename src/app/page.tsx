'use client'
import { useState } from "react";

export default function Home() {
  const [count , setState] = useState(0)

  const increase = () => {
    if (count < 10) {
      setState(count + 1)
    }else{
      alert("Maximum limit reached!")
    }
  }
  const decrease = () => {
    if (count > 0) {
      setState(count - 1)
    }else{
      alert("You are already on zero")
    }
  }
  return (
   <div className="max-w-[1440px] h-[80vh]">
      <div className="w-[600px] h-[300px] bg-[#f9f9f9] relative top-[35%] left-[28%] hover:shadow-[0px_0px_10px_white] rounded-lg">
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-[gold] flex justify-center items-center rounded-lg">
        <button className="text-xl py-2 px-6 bg-red-600 rounded-l-sm" onClick={decrease}>-</button>
        <button className="text-xl py-2 px-6 bg-green-600 rounded-r-sm" onClick={increase}>+</button>
        <h2 className=" absolute top-0 right-0 text-xl w-14 h-14 bg-black rounded-bl-full flex justify-center pt-2 pl-2">{count}</h2>
      </div>
      </div>
   </div>
  );
}
