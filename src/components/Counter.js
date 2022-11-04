import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (action) => {
    if (action === "minus") {
      setCounter(counter - 1);
    } else if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(0);
    }
  };
  return (
    <div className="container">
      <header className="container">
        <i class="fa-solid fa-hourglass-start"></i>
        <span>React Counter V2</span>
      </header>

      <div className="buttons-container">
        <button className="add">Add Counter</button>
        {counter !== 0 && (
          <button
            onClick={() => {
              handleClick("minus");
            }}
          >
            -
          </button>
        )}

        <span>{counter}</span>

        {counter !== 10 && (
          <button
            onClick={() => {
              handleClick("plus");
            }}
          >
            +
          </button>
        )}
      </div>
      <div className="center">
        <button
          onClick={() => {
            handleClick("reset");
          }}
          className="reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
