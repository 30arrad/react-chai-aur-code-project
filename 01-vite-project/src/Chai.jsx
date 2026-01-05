import { useState } from "react";

function Chai() {
  const [counter, setCounter] = useState(15);
  let Add = () => {
    setCounter(counter + 1);
  };
  let Remove = () => {
    setCounter(counter - 1);
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
