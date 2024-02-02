import { useState } from "react";
import "./App.css";
import ConfigurationPanel from "./ConfigurationPanel";
import Timer from "./Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  function increment(id) {
    if (
      (id === "break" && breakLength === 60) ||
      (id === "session" && sessionLength === 60)
    ) {
      return;
    }
    if (id === "break") {
      setBreakLength(breakLength + 1);
    } else {
      setSessionLength(sessionLength + 1);
    }
  }

  function decrement(id) {
    if (
      (id === "break" && breakLength === 0) ||
      (id === "session" && sessionLength === 0)
    ) {
      return;
    }
    if (id === "break") {
      setBreakLength(breakLength - 1);
    } else {
      setSessionLength(sessionLength - 1);
    }
  }

  function reset() {
    setSessionLength(25);
    setBreakLength(5);
  }

  return (
    <div className="App">
      <div className="main-title">
        <strong>pomodoro</strong> timer
      </div>
      <div id="timer">
        <section>
          <ConfigurationPanel
            title="Break time"
            id="break"
            length={breakLength}
            onIncrementButton={() => increment("break")}
            onDecrementButton={() => decrement("break")}
          />
          <ConfigurationPanel
            title="Working time"
            id="session"
            length={sessionLength}
            onIncrementButton={() => increment("session")}
            onDecrementButton={() => decrement("session")}
          />
        </section>
        <Timer time="25:00" onReset={reset} />
      </div>
    </div>
  );
}

export default App;
