import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounterS] = useState([0, 4]);

  const handleClick = (action) => {
    if (action === "minus") {
      setCounterS(counters - 1);
    } else if (action === "plus") {
      setCounterS(counters + 1);
    } else if (action === "reset") {
      setCounterS(0);
    }
  };

  return (
    <div>
      {counters.map((counter) => {
        console.log(
          <div className="container">
            <header className="container">
              <i class="fa-solid fa-hourglass-start"></i>
              <span>React Counter V2</span>
            </header>

            <div className="buttons-container">
              <button
                className="add"
                onClick={() => {
                  const newCounter = [...counters];
                  newCounter.push(<div className="container"></div>);
                  setCounterS(newCounter);
                }}
              >
                Add Counter
              </button>

              {counters !== 0 && (
                <button
                  onClick={() => {
                    handleClick("minus");
                  }}
                >
                  -
                </button>
              )}

              <span>{counters}</span>

              {counters !== 10 && (
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
      })}
    </div>
  );
}

export default App;
