import { useState } from "react";
import "./PlayButton.css";
function PlayButton({ message, children, onPlay, onPause }) {
  // let playing = false;
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(message)
    // onClick();
    console.log(e);
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing);
  }
  return (
    // <button onClick={()=>console.log('play')}>Play</button>

    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton;
