import { useState } from "react";

function Counter() {
  console.log("render counter");
  //   let number = 0;
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      // setNumber(number+1);  // normal render
      setNumber((number) => number + 1); //updater style function ----
      // here every event will render or update after frequenlty.
      //  mwans suppose if you clicked 5 times Add button then render (or update)
      //  will happen 5 times. It doesn't matter how fast you have clicked.
    }, 2000);
    // number++;

    console.log(number);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;

// NOte: Asynchornuos ----- whole function will run first then it will decide to update the states and rerender accordingly.
