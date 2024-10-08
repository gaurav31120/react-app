import { useCallback, useMemo, useRef, useState } from "react";

function Counter() {
  console.log("render counter");
  //   let number = 0;
  const [number, setNumber] = useState(40);
  let num = useRef(0);

  function handleClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  }

  const fibFx = useCallback(function fib(n) {
    //1,2,3,4,5
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  },[]);

  const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);

  return (
    <>
      <h1 style={{ color: "white" }}>
        {number} | {fibMemoized}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;

// NOte: Asynchornuos ----- whole function will run first then it will decide to update the states and rerender accordingly.
