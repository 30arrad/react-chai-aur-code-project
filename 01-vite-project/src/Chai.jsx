import { useState } from "react";

function Chai() {
  const [counter, setCounter] = useState(0);
  let Add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  let Remove = () => {
    if (0< counter) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h3>Total Number : {counter}</h3>
      <button onClick={Add}>Add </button>
      <br />
      <button onClick={Remove}>Remove</button>
    </>
  );
}

export default Chai;
