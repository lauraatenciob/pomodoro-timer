import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-title">
        <strong>pomodoro</strong> timer
      </div>
      <div id="timer">
        <section>
          <div id="break-label">
            <p className="subtitle">Break time</p>
            <div className="configuration-panel">
              <button id="break-decrement">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <p id="break-length">5</p>
              <button id="break-increment">
                <i class="fa-solid fa-chevron-up"></i>
              </button>
            </div>
          </div>
          <div id="session-label">
            <p className="subtitle">Working time</p>
            <div className="configuration-panel">
              <button id="session-decrement">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <p id="session-length">25</p>
              <button id="session-increment">
                <i class="fa-solid fa-chevron-up"></i>
              </button>
            </div>
          </div>
        </section>
        <div id="timer-label">
          <p className="subtitle">Let's Work</p>
          <p id="time-left">25:00</p>
          <button id="start_stop">
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-pause"></i>
          </button>
          <button id="reset">
            <i class="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
