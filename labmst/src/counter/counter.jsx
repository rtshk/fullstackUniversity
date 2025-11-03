import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [maxLimit, setMaxLimit] = useState(false);

  function Increment() {
    setCount((prevCount) => {
      if (prevCount < 10) {
        setMaxLimit(false);            
        return prevCount + 1;         
      } else {
        setMaxLimit(true);            
        return prevCount;              
      }
    });
  }

  function Decrement() {
    setCount((prevCount) => {
      if (prevCount > 0) {
        setMaxLimit(false);            
        return prevCount - 1;
      } else {
        return prevCount;              
      }
    });
  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="mb-2 text-xl">Counter: {count}</div>
      {maxLimit && (
        <div className="text-red-500 mb-2 font-semibold">Max limit reached</div>
      )}
      <div className="flex flex-col">
        <button
          className="bg-black rounded-2xl p-2 text-white mb-2"
          onClick={Increment}
        >
          Increment
        </button>
        <button
          className="bg-black rounded-2xl p-2 text-white"
          onClick={Decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
