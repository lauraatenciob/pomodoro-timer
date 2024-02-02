export default function Timer({time, onReset}) {
  return (
    <div id="timer-label">
      <p className="subtitle">Let's Work</p>
      <p id="time-left">{time}</p>
      <button id="start_stop">
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-pause"></i>
      </button>
      <button id="reset" onClick={onReset}>
        <i class="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>
  );
}
